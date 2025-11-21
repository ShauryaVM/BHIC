"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";

export function SignInButton() {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    try {
      setPending(true);
      await signIn("google", {
        callbackUrl: "/",
        redirect: true
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <GoogleGlyph />}
      {pending ? "Connecting to Google..." : "Sign in with Google"}
    </button>
  );
}

function GoogleGlyph() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" aria-hidden="true">
      <path
        d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.3H272.1v95.3h147.3c-6.4 34.7-25.7 64-54.8 83.7v69.1h88.6c51.9-47.8 80.3-118.3 80.3-197.8z"
        fill="#4285f4"
      />
      <path
        d="M272.1 544.3c73.8 0 135.7-24.4 180.9-66.1l-88.6-69.1c-24.6 16.5-56 26.1-92.3 26.1-71 0-131.1-47.9-152.6-112.1H27.7v70.5c45.2 89.9 137.9 150.7 244.4 150.7z"
        fill="#34a853"
      />
      <path
        d="M119.5 323.1c-10.6-31.5-10.6-65.4 0-96.9V155.7H27.7c-45.1 89.9-45.1 196.2 0 286.1l91.8-70.5z"
        fill="#fbbc04"
      />
      <path
        d="M272.1 107.7c39.9-.6 78.4 14.7 107.6 42.7l80.3-80.3C405 24 342.1-1.2 272.1 0 165.6 0 72.9 60.8 27.7 150.7l91.8 70.5c21.5-64.3 81.6-112.1 152.6-112.1z"
        fill="#ea4335"
      />
    </svg>
  );
}


