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
  title: "Create account — Northstar",
  description: "Create your Northstar account.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="START SOMETHING GREAT"
      title="Your next big idea starts here."
      description="Create your account and get a clear, collaborative space for turning ambitious ideas into real digital products."
    >
      <div className="mb-7">
        <h2 className="text-[34px] font-bold tracking-[-1.5px]">Create an account</h2>
        <p className="mt-2 text-sm text-[#72767f]">It only takes a minute to get started.</p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <label className={labelClass}>
            First name
            <input className={inputClass} type="text" name="firstName" placeholder="Maya" autoComplete="given-name" required />
          </label>
          <label className={labelClass}>
            Last name
            <input className={inputClass} type="text" name="lastName" placeholder="Sharma" autoComplete="family-name" required />
          </label>
        </div>
        <label className={labelClass}>
          Work email
          <input className={inputClass} type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
        </label>
        <label className={labelClass}>
          Password
          <input className={inputClass} type="password" name="password" placeholder="At least 8 characters" autoComplete="new-password" minLength={8} required />
        </label>
        <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-[#656b76]">
          <input type="checkbox" name="terms" className="mt-0.5 size-4 shrink-0 rounded border-[#17233c]/20 accent-[#f36b4f]" required />
          <span>I agree to the <Link href="#" className="font-bold text-[#17233c] hover:text-[#f36b4f]">Terms of Service</Link> and <Link href="#" className="font-bold text-[#17233c] hover:text-[#f36b4f]">Privacy Policy</Link>.</span>
        </label>
        <button type="submit" className={submitClass}>Create my account</button>
      </form>

      <Divider />

      <button type="button" className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#17233c]/15 bg-white text-sm font-bold transition hover:border-[#17233c]/30 hover:bg-[#f2f0ea]">
        <GoogleIcon /> Sign up with Google
      </button>

      <p className="mt-7 text-center text-sm text-[#72767f]">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-[#f36b4f] hover:underline">Sign in</Link>
      </p>
    </AuthShell>
  );
}
