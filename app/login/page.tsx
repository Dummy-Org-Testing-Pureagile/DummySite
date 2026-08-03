import type { Metadata } from "next";
import Link from "next/link";
import {
  AuthShell,
  Divider,
  GoogleIcon,
  inputClass,
  labelClass,
  submitClass,
} from "../components/AuthShell";

export const metadata: Metadata = {
  title: "Sign in — Northstar",
  description: "Sign in to your Northstar account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="WELCOME BACK"
      title="Good to see you again."
      description="Sign in to manage your projects, review progress, and keep creating remarkable things with us."
    >
      <div className="mb-8">
        <h2 className="text-[34px] font-bold tracking-[-1.5px]">Sign in</h2>
        <p className="mt-2 text-sm text-[#72767f]">Enter your details to access your account.</p>
      </div>

      <form className="space-y-5">
        <label className={labelClass}>
          Email address
          <input className={inputClass} type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
        </label>
        <label className={labelClass}>
          <span className="flex items-center justify-between">
            Password
            <Link href="#" className="font-semibold text-[#f36b4f] hover:underline">Forgot password?</Link>
          </span>
          <input className={inputClass} type="password" name="password" placeholder="Enter your password" autoComplete="current-password" minLength={8} required />
        </label>
        <label className="flex w-fit cursor-pointer items-center gap-2.5 text-xs text-[#656b76]">
          <input type="checkbox" name="remember" className="size-4 rounded border-[#17233c]/20 accent-[#f36b4f]" />
          Keep me signed in
        </label>
        <button type="submit" className={submitClass}>Sign in to your account</button>
      </form>

      <Divider />

      <button type="button" className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#17233c]/15 bg-white text-sm font-bold transition hover:border-[#17233c]/30 hover:bg-[#f2f0ea]">
        <GoogleIcon /> Continue with Google and github
      </button>

      <p className="mt-8 text-center text-sm text-[#72767f]">
        New to Northstar?{" "}
        <Link href="/register" className="font-bold text-[#f36b4f] hover:underline">Create an account</Link>
      </p>
    </AuthShell>
  );
}
