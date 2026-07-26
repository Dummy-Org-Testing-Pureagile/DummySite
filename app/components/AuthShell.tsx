import Link from "next/link";
import type { ReactNode } from "react";

const Spark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2c.7 5.7 4.3 9.3 10 10-5.7.7-9.3 4.3-10 10-.7-5.7-4.3-9.3-10-10 5.7-.7 9.3-4.3 10-10Z" fill="currentColor" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.01v2.53h3.24c1.9-1.75 2.98-4.32 2.98-7.38Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.4l-3.24-2.52c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.92a6.02 6.02 0 0 1 0-3.84v-2.6H3.06a10 10 0 0 0 0 9.04l3.34-2.6Z" />
      <path fill="#EA4335" d="M12 5.96c1.47 0 2.79.5 3.82 1.5l2.87-2.87A9.62 9.62 0 0 0 3.06 7.48l3.34 2.6C7.19 7.72 9.4 5.96 12 5.96Z" />
    </svg>
  );
}

export function AuthShell({
  children,
  eyebrow,
  title,
  description,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="grid min-h-screen grid-cols-[1.05fr_.95fr] bg-[#f7f5ef] text-[#17233c] max-lg:grid-cols-1">
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#17233c] px-[clamp(32px,5vw,76px)] py-10 text-white max-lg:min-h-[340px] max-lg:py-8 max-md:min-h-[300px] max-md:px-6">
        <div className="absolute top-1/2 left-1/2 size-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 max-lg:size-[470px]" />
        <div className="absolute top-1/2 left-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 max-lg:size-[320px]" />
        <div className="absolute right-[-100px] bottom-[-120px] size-[370px] rounded-full bg-[#f36b4f]/90 blur-[1px] max-lg:right-[-60px] max-lg:bottom-[-200px]" />
        <div className="absolute right-[12%] bottom-[16%] size-24 rounded-full border-[18px] border-[#f0ad92]/80 max-lg:bottom-[-10px]" />

        <Link href="/" className="relative z-10 flex w-fit items-center gap-2 text-[22px] font-extrabold tracking-[-1px]">
          <span className="grid size-[31px] place-items-center rounded-full bg-[#f36b4f] text-white"><Spark /></span>
          Northstar<span className="-ml-2 text-[#f36b4f]">.</span>
        </Link>

        <div className="relative z-10 my-auto max-w-[560px] max-lg:my-14 max-lg:max-w-[620px] max-md:my-10">
          <span className="mb-5 block text-[11px] font-extrabold tracking-[2.3px] text-[#f36b4f]">{eyebrow}</span>
          <h1 className="text-[clamp(48px,5.3vw,76px)] leading-[.98] font-bold tracking-[-4px] max-lg:text-[52px] max-md:text-[42px] max-md:tracking-[-2px]">{title}</h1>
          <p className="mt-7 max-w-[470px] text-base leading-relaxed text-[#aeb4c0] max-md:mt-5 max-md:text-sm">{description}</p>
        </div>

        <p className="relative z-10 text-[10px] tracking-wide text-[#727b8d] max-lg:hidden">STRATEGY · DESIGN · TECHNOLOGY</p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-[clamp(24px,5vw,72px)] py-12 max-lg:min-h-0 max-md:px-5">
        <div className="w-full max-w-[470px]">
          <Link href="/" className="mb-10 inline-flex items-center gap-1 text-xs font-bold text-[#72767f] transition-colors hover:text-[#f36b4f]">
            <ArrowLeft /> Back to home
          </Link>
          {children}
        </div>
      </section>
    </main>
  );
}

export const inputClass =
  "mt-2 h-[52px] w-full rounded-xl border border-[#17233c]/15 bg-white px-4 text-sm text-[#17233c] outline-none transition placeholder:text-[#9a9da3] focus:border-[#f36b4f] focus:ring-4 focus:ring-[#f36b4f]/10";

export const labelClass = "block text-xs font-bold text-[#30394d]";

export const submitClass =
  "flex h-[54px] w-full items-center justify-center rounded-full bg-[#17233c] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#223252] focus:outline-none focus:ring-4 focus:ring-[#17233c]/15";

export function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <span className="h-px flex-1 bg-[#17233c]/10" />
      <span className="text-[10px] font-bold tracking-[1.5px] text-[#969aa3] uppercase">or continue with</span>
      <span className="h-px flex-1 bg-[#17233c]/10" />
    </div>
  );
}
