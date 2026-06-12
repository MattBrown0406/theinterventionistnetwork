import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
  sort_order: number;
  created_at: string;
}

export interface ForumThread {
  id: string;
  category_id: string;
  author_name: string;
  title: string;
  body: string;
  is_pinned: boolean;
  is_locked: boolean;
  reply_count: number;
  last_reply_at: string;
  created_at: string;
  updated_at: string;
  forum_categories?: ForumCategory;
}

export interface ForumReply {
  id: string;
  thread_id: string;
  author_name: string;
  body: string;
  created_at: string;
}

const THREAD_COLUMNS =
  "id, category_id, author_name, title, body, is_pinned, is_locked, reply_count, last_reply_at, created_at, updated_at";
const REPLY_COLUMNS = "id, thread_id, author_name, body, created_at";

export function useForumCategories() {
  return useQuery({
    queryKey: ["forum-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_categories")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data as ForumCategory[];
    },
  });
}

export function useForumThreadsByCategory(categoryId: string | undefined) {
  return useQuery({
    queryKey: ["forum-threads", categoryId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_threads")
        .select(THREAD_COLUMNS)
        .eq("category_id", categoryId!)
        .order("is_pinned", { ascending: false })
        .order("last_reply_at", { ascending: false });
      if (error) throw error;
      return data as ForumThread[];
    },
    enabled: !!categoryId,
  });
}

export function useForumThread(threadId: string | undefined) {
  return useQuery({
    queryKey: ["forum-thread", threadId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_threads")
        .select(`${THREAD_COLUMNS}, forum_categories(*)`)
        .eq("id", threadId!)
        .single();
      if (error) throw error;
      return data as ForumThread;
    },
    enabled: !!threadId,
  });
}

export function useForumReplies(threadId: string | undefined) {
  return useQuery({
    queryKey: ["forum-replies", threadId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_replies")
        .select(REPLY_COLUMNS)
        .eq("thread_id", threadId!)
        .order("created_at");
      if (error) throw error;
      return data as ForumReply[];
    },
    enabled: !!threadId,
  });
}

export function useRecentThreads() {
  return useQuery({
    queryKey: ["forum-recent-threads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_threads")
        .select(`${THREAD_COLUMNS}, forum_categories(name, slug)`)
        .order("last_reply_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data as (ForumThread & { forum_categories: { name: string; slug: string } })[];
    },
  });
}

export function useForumStats() {
  return useQuery({
    queryKey: ["forum-stats"],
    queryFn: async () => {
      const [threads, replies] = await Promise.all([
        supabase.from("forum_threads").select("id", { count: "exact", head: true }),
        supabase.from("forum_replies").select("id", { count: "exact", head: true }),
      ]);
      return {
        threads: threads.count ?? 0,
        replies: replies.count ?? 0,
      };
    },
  });
}

export function useCategoryThreadCounts() {
  return useQuery({
    queryKey: ["forum-category-thread-counts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("forum_threads")
        .select("category_id");
      if (error) throw error;
      const counts: Record<string, number> = {};
      (data || []).forEach((t: { category_id: string }) => {
        counts[t.category_id] = (counts[t.category_id] || 0) + 1;
      });
      return counts;
    },
  });
}
