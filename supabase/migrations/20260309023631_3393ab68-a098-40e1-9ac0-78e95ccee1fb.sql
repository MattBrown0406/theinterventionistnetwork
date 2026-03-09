
-- Forum categories table
CREATE TABLE public.forum_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  slug text NOT NULL UNIQUE,
  icon text NOT NULL DEFAULT '💬',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.forum_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read forum categories" ON public.forum_categories FOR SELECT USING (true);

-- Forum threads table
CREATE TABLE public.forum_threads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id uuid NOT NULL REFERENCES public.forum_categories(id) ON DELETE CASCADE,
  author_name text NOT NULL,
  author_email text NOT NULL,
  title text NOT NULL,
  body text NOT NULL,
  is_pinned boolean NOT NULL DEFAULT false,
  is_locked boolean NOT NULL DEFAULT false,
  reply_count integer NOT NULL DEFAULT 0,
  last_reply_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read forum threads" ON public.forum_threads FOR SELECT USING (true);
CREATE POLICY "Anyone can create forum threads" ON public.forum_threads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update forum threads" ON public.forum_threads FOR UPDATE USING (true) WITH CHECK (true);

-- Forum replies table
CREATE TABLE public.forum_replies (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id uuid NOT NULL REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  author_name text NOT NULL,
  author_email text NOT NULL,
  body text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read forum replies" ON public.forum_replies FOR SELECT USING (true);
CREATE POLICY "Anyone can create forum replies" ON public.forum_replies FOR INSERT WITH CHECK (true);

-- Trigger to update reply_count and last_reply_at on forum_threads
CREATE OR REPLACE FUNCTION public.update_thread_reply_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.forum_threads
  SET reply_count = (SELECT count(*) FROM public.forum_replies WHERE thread_id = NEW.thread_id),
      last_reply_at = NEW.created_at,
      updated_at = now()
  WHERE id = NEW.thread_id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_forum_reply_insert
  AFTER INSERT ON public.forum_replies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_thread_reply_stats();
