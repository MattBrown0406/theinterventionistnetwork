const SUBMISSION_COOLDOWN_MS = 15_000;
const TIMING_MIN_MS = 1_500;

type GuardResult = {
  ok: boolean;
  reason?: string;
};

const getStorageKey = (formKey: string) => `tin-form-last-submit:${formKey}`;

export const createInitialSubmitMeta = () => ({
  website: "",
  startedAt: Date.now(),
});

export const validateProtectedSubmission = (formKey: string, website: string, startedAt: number): GuardResult => {
  if (website.trim().length > 0) {
    return { ok: false, reason: "Spam submission blocked." };
  }

  if (Date.now() - startedAt < TIMING_MIN_MS) {
    return { ok: false, reason: "Please take a moment to complete the form before submitting." };
  }

  const storageKey = getStorageKey(formKey);
  const lastSubmittedAt = Number(window.sessionStorage.getItem(storageKey) || 0);

  if (lastSubmittedAt && Date.now() - lastSubmittedAt < SUBMISSION_COOLDOWN_MS) {
    return { ok: false, reason: "Please wait a few seconds before submitting again." };
  }

  return { ok: true };
};

export const markProtectedSubmission = (formKey: string) => {
  window.sessionStorage.setItem(getStorageKey(formKey), String(Date.now()));
};
