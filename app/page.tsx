const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2c.7 5.7 4.3 9.3 10 10-5.7.7-9.3 4.3-10 10-.7-5.7-4.3-9.3-10-10 5.7-.7 9.3-4.3 10-10Z" fill="currentColor" />
  </svg>
);

const services = [
  ["01", "Strategy", "We turn complex ideas into a clear roadmap built around your users and business goals.", ["Research", "Positioning", "Roadmap"]],
  ["02", "Design", "Distinctive visual systems and thoughtful experiences that feel simple, useful, and memorable.", ["Brand identity", "UI/UX", "Prototyping"]],
  ["03", "Development", "Fast, accessible digital products engineered to perform beautifully on every screen.", ["Web apps", "Websites", "No-code"]],
] as const;

const steps = [
  ["Discover", "We listen, learn, and find the opportunity that matters most."],
  ["Define", "We align on a sharp strategy and a plan everyone believes in."],
  ["Create", "We design, build, test, and refine in focused weekly cycles."],
  ["Launch", "We ship with confidence and help you keep growing after go-live."],
];

const shell = "mx-auto w-[min(1180px,calc(100%-48px))] max-md:w-[calc(100%-28px)]";
const kicker = "mb-4 block text-[11px] font-extrabold tracking-[2.3px] text-[#f36b4f]";
const heading = "text-[clamp(42px,5vw,64px)] leading-[1.05] font-bold tracking-[-3px] max-md:text-[44px] max-md:tracking-[-2px]";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f5ef] font-sans text-[#17233c]">
      <header className={`${shell} flex h-[92px] items-center justify-between max-md:h-[76px]`}>
        <a href="#top" className="flex items-center gap-2 text-[22px] font-extrabold tracking-[-1px]" aria-label="Northstar home">
          <span className="grid size-[31px] place-items-center rounded-full bg-[#f36b4f] text-white"><Spark /></span>
          Northstar<span className="-ml-2 text-[#f36b4f]">.</span>
        </a>
        <nav className="flex items-center gap-9 text-sm font-semibold max-lg:hidden" aria-label="Main navigation">
          {["Work", "Services", "Process", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#f36b4f]">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-5 max-md:gap-3">
          <a href="/login" className="text-[13px] font-bold transition-colors hover:text-[#f36b4f]">Sign in</a>
          <a href="#contact" className="flex items-center gap-2 rounded-full border border-[#17233c] px-[18px] py-[11px] text-[13px] font-bold transition-transform hover:-translate-y-0.5 max-md:px-3 max-md:text-xs">
            <span className="max-md:hidden">Start a project</span><span className="hidden max-md:inline">Let&apos;s talk</span><ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section id="top" className={`${shell} grid min-h-[650px] grid-cols-[1.03fr_.97fr] items-center gap-[50px] py-[68px] max-lg:grid-cols-1 max-lg:pt-11 max-lg:text-center max-md:min-h-0 max-md:py-[50px]`}>
        <div>
          <div className="mb-6 flex items-center gap-2.5 text-[11px] font-extrabold tracking-[2.3px] max-lg:justify-center">
            <span className="h-0.5 w-7 bg-[#f36b4f]" /> Robotics automation lab
          </div>
          <h1 className="max-w-[650px] text-[clamp(54px,5.5vw,83px)] leading-[.98] font-bold tracking-[-5px] max-lg:mx-auto max-md:text-[53px] max-md:tracking-[-3.5px] max-[430px]:text-[46px]">
            Build bold ideas<br />with AI that <em className="font-serif font-normal text-[#f36b4f]">inspires.</em>
          </h1>
          <p className="my-7 max-w-[560px] text-lg leading-[1.65] text-[#666b75] max-lg:mx-auto max-md:text-base">
            Bring autonomous workflows, robotic vision, and intelligent automation together with a bold platform built for high-performing teams.
          </p>
          <div className="my-8 flex items-center gap-8 max-lg:justify-center max-md:flex-col max-md:gap-5">
            <a href="#contact" className="flex items-center gap-2.5 rounded-full bg-[#17233c] px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Launch your robotics demo <ArrowUpRight /></a>
            <a href="#work" className="border-b border-[#17233c] pb-1 text-sm font-bold">Explore robotic solutions <span className="ml-1 text-[#f36b4f]">↓</span></a>
          </div>
          <div className="mt-11 flex items-center gap-4 max-lg:justify-center">
            <div className="flex" aria-hidden="true">
              {["AL", "MK", "JP"].map((person, index) => (
                <span key={person} className={`grid size-[38px] place-items-center rounded-full border-[3px] border-[#f7f5ef] text-[9px] font-extrabold text-white ${index ? "-ml-2" : ""} ${index === 0 ? "bg-[#386265]" : index === 1 ? "bg-[#d4a383]" : "bg-[#c98274]"}`}>{person}</span>
              ))}
            </div>
            <p className="text-left text-[11px] leading-normal text-[#777b82]"><strong className="text-xs text-[#17233c]">25k+ robotic tasks automated</strong><br />from prototypes to production</p>
          </div>
        </div>

        <div className="relative grid min-h-[500px] place-items-center max-lg:mt-5 max-md:-mx-20 max-md:-my-6 max-md:min-h-[390px] max-md:scale-[.74] max-[430px]:-mx-[120px] max-[430px]:-my-14 max-[430px]:scale-[.62]" aria-label="Robotic automation hero banner">
          <div className="absolute size-[430px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#f36b4f,#9b4f67_52%,#17233c)] opacity-90" />
          <div className="absolute h-[260px] w-[520px] rotate-[25deg] rounded-full border border-white/55" />
          <div className="absolute h-[530px] w-[300px] rotate-[55deg] rounded-full border border-white/55" />
          <div className="relative z-10 h-[355px] w-[490px] -rotate-2 overflow-hidden rounded-[13px] bg-white bg-cover bg-center shadow-[0_28px_70px_rgba(36,42,61,.22)]"
            style={{ backgroundImage: "linear-gradient(rgba(23,35,60,.18), rgba(23,35,60,.56)), url('https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=1200&q=80')" }}>
            <div className="hidden h-[49px] items-center justify-between border-b border-[#eceef0] px-[18px]">
              <div className="grid size-[25px] place-items-center rounded-lg bg-[#f36b4f] text-sm text-white">🤖</div>
              <div className="flex gap-1.5">{[1, 2, 3].map((dot) => <i key={dot} className="size-1.5 rounded-full bg-[#dfe1e5]" />)}</div>
            </div>
            <div className="hidden h-[306px] grid-cols-[108px_1fr]">
              <aside className="flex flex-col gap-[22px] bg-[#fafafa] px-[17px] py-[26px] text-[9px] text-[#9c9fa5]"><b className="text-[#f36b4f]">Robot Core</b><span>Fleet</span><span>Vision</span><span>Safety</span></aside>
              <div className="p-[27px]">
                <div className="flex items-end justify-between">
                  <div className="flex flex-col"><small className="text-[7px] tracking-widest text-[#9a9da3]">ROBOT READINESS</small><strong className="mt-1 text-[25px] tracking-[-1px]">98.7%</strong></div>
                  <b className="rounded-full bg-[#e8f6ee] px-2 py-1 text-[9px] text-[#35a16b]">Synced</b>
                </div>
                <div className="relative mt-2.5 h-[150px] overflow-hidden bg-[linear-gradient(#eceef2_1px,transparent_1px)] bg-[size:100%_37px]">
                  <svg className="absolute inset-0 size-full" viewBox="0 0 400 145" preserveAspectRatio="none" aria-hidden="true">
                    <defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7456" stopOpacity=".38" /><stop offset="1" stopColor="#ff7456" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 125 C50 120,55 80,100 92 S170 125,205 68 S275 105,310 45 S365 45,400 15 V145 H0Z" fill="url(#fill)" />
                    <path d="M0 125 C50 120,55 80,100 92 S170 125,205 68 S275 105,310 45 S365 45,400 15" fill="none" stroke="#f35f43" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="310" cy="45" r="6" fill="#fff" stroke="#f35f43" strokeWidth="4" />
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[["Navigation", "99.2%"], ["Pick cycles", "12k"], ["Response", "0.4s"]].map(([label, value]) => (
                    <div key={label} className="flex flex-col rounded-md bg-[#f7f7f8] p-2.5"><span className="text-[7px] text-[#969aa2]">{label}</span><strong className="mt-1 text-xs">{value}</strong></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[38px] right-[-8px] z-20 flex rotate-[4deg] items-center gap-2.5 rounded-[10px] bg-white px-4 py-3 shadow-[0_16px_35px_rgba(31,40,65,.18)]">
            <span className="grid size-8 place-items-center rounded-full bg-[#e7f6ef] font-extrabold text-[#30a675]">AI</span><div className="flex flex-col"><small className="text-[7px] tracking-widest text-[#9a9da3]">ROBOT VISION</small><strong className="text-xs">Ready</strong></div>
          </div>
          <div className="absolute bottom-[42px] left-[-5px] z-20 flex -rotate-[4deg] items-center gap-2.5 rounded-[10px] bg-white px-4 py-3 shadow-[0_16px_35px_rgba(31,40,65,.18)]">
            <span className="grid size-8 place-items-center rounded-full bg-[#f36b4f] text-white"><Check /></span><div className="flex flex-col text-left"><strong className="text-xs">Mission-ready</strong><small className="text-[7px] text-[#9a9da3]">Autonomous mode</small></div>
          </div>
        </div>
      </section>

      <section className="bg-[#17233c] px-[6vw] py-8 text-center text-white">
        <p className="mb-6 text-[9px] tracking-[2px] text-[#aab0bc] uppercase">Helping ambitious teams move forward</p>
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-between gap-6 max-md:justify-center max-md:gap-x-9">
          <span className="text-[17px] font-extrabold tracking-wide">VERTEX</span><span className="font-serif text-2xl italic">lumio</span><span className="text-[17px] font-extrabold">◆ &nbsp; APEX</span><span className="text-[13px] font-extrabold tracking-[3px]">NORTH / CO</span><span className="text-[17px] font-extrabold">○ orbit</span>
        </div>
      </section>

      <section id="work" className={`${shell} py-[120px] max-md:py-[85px]`}>
        <div className="mb-[60px] flex items-end justify-between gap-8 max-md:mb-10 max-md:flex-col max-md:items-start">
          <div><span className={kicker}>SELECTED WORK</span><h2 className={heading}>Built to make<br />a difference.</h2></div>
          <p className="max-w-[320px] text-[15px] leading-relaxed text-[#72767f]">We partner with people who care about the details—and the impact.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <Project type="finance" />
          <Project type="health" />
        </div>
      </section>

      <section id="services" className="bg-[#17233c] py-[120px] text-white max-md:py-[85px]">
        <div className={shell}>
          <div className="mb-[60px] flex items-end justify-between gap-8 max-md:mb-10 max-md:flex-col max-md:items-start">
            <div><span className={kicker}>WHAT WE DO</span><h2 className={heading}>Everything you need.<br />Nothing you don&apos;t.</h2></div>
            <p className="max-w-[320px] text-[15px] leading-relaxed text-[#a7adba]">One integrated team from the first sketch to the final launch.</p>
          </div>
          <div className="border-t border-white/15">
            {services.map(([number, title, text, tags]) => (
              <article key={number} className="grid min-h-[165px] grid-cols-[70px_1fr_1fr_45px] items-center gap-8 border-b border-white/15 transition-all hover:bg-white/[.035] hover:px-4 max-md:min-h-0 max-md:grid-cols-[34px_1fr_35px] max-md:gap-3 max-md:py-7">
                <span className="self-start pt-10 text-[11px] text-[#f36b4f] max-md:pt-2">{number}</span>
                <div><h3 className="m-0 text-[38px] font-bold tracking-[-1.5px] max-md:text-[29px]">{title}</h3><p className="max-w-[430px] text-[13px] leading-relaxed text-[#a8adba] max-md:col-span-2">{text}</p></div>
                <div className="flex flex-wrap gap-2 max-md:hidden">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/20 px-3 py-2 text-[9px] tracking-wider text-[#c7cad1] uppercase">{tag}</span>)}</div>
                <span className="grid size-[42px] place-items-center rounded-full border border-white/20 max-md:size-[35px]"><ArrowUpRight /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={`${shell} py-[120px] max-md:py-[85px]`}>
        <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
          <div><span className={kicker}>HOW IT WORKS</span><h2 className={heading}>Simple process.<br /><em className="font-serif font-normal text-[#f36b4f]">Serious momentum.</em></h2></div>
          <p className="max-w-[390px] leading-relaxed text-[#72767f]">Clear communication, quick decisions, and no black boxes. You&apos;ll always know what&apos;s happening and why.</p>
        </div>
        <div className="mt-20 grid grid-cols-4 border-t border-[#17233c]/15 max-md:mt-14 max-md:grid-cols-2 max-md:gap-y-8 max-[430px]:grid-cols-1 max-[430px]:border-0">
          {steps.map(([title, text], index) => (
            <article key={title} className="relative pr-8 pt-12 max-[430px]:border-t max-[430px]:border-[#17233c]/15">
              <div className="absolute -top-4 grid size-[31px] place-items-center rounded-full bg-[#f36b4f] text-[10px] font-extrabold text-white">{index + 1}</div>
              <h3 className="my-3 text-[22px] font-bold">{title}</h3><p className="text-[13px] leading-relaxed text-[#72767f]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#eae6dc] px-8 py-[110px] text-center max-md:px-5 max-md:py-[90px]">
        <div className="font-serif text-[90px] leading-[.5] text-[#f36b4f]">“</div>
        <blockquote className="mx-auto my-10 max-w-[920px] text-[clamp(31px,4vw,52px)] leading-[1.18] font-bold tracking-[-2px]">
          Northstar didn&apos;t just make our product look better. <em className="font-serif font-normal text-[#f36b4f]">They helped us see the business differently.</em>
        </blockquote>
        <div className="inline-flex items-center gap-3 text-left">
          <span className="grid size-[43px] place-items-center rounded-full bg-[#ba8066] text-[10px] text-white">SR</span>
          <p className="text-[10px] leading-relaxed text-[#767982]"><strong className="text-[11px] text-[#17233c]">Sofia Ramirez</strong><br />Co-founder, Flow Finance</p>
        </div>
      </section>

      <section id="contact" className={`${shell} grid min-h-[520px] grid-cols-[.9fr_1.1fr] items-center gap-12 py-[90px] max-md:min-h-0 max-md:grid-cols-1 max-md:py-[75px]`}>
        <div>
          <span className={kicker}>CONTACT US</span>
          <h2 className={heading}>Let&apos;s make something<br /><em className="font-serif font-normal text-[#f36b4f]">remarkable.</em></h2>
          <p className="mt-6 max-w-[420px] leading-relaxed text-[#72767f]">Share a few details and we&apos;ll get back to you with next steps for your robotics project.</p>
          <a href="mailto:hello@northstar.studio" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f36b4f]">Email us directly <ArrowUpRight size={16} /></a>
        </div>
        <form action="mailto:hello@northstar.studio" method="post" encType="text/plain" className="rounded-[28px] bg-white p-8 shadow-[0_24px_70px_rgba(36,42,61,.12)] max-md:w-full max-md:p-5">
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <label className="flex flex-col gap-2 text-xs font-bold text-[#17233c]">
              Name
              <input name="name" required placeholder="Your name" className="rounded-2xl border border-[#17233c]/15 bg-[#f7f5ef] px-4 py-3 text-sm font-normal outline-none transition-colors focus:border-[#f36b4f]" />
            </label>
            <label className="flex flex-col gap-2 text-xs font-bold text-[#17233c]">
              Email
              <input name="email" type="email" required placeholder="you@example.com" className="rounded-2xl border border-[#17233c]/15 bg-[#f7f5ef] px-4 py-3 text-sm font-normal outline-none transition-colors focus:border-[#f36b4f]" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-xs font-bold text-[#17233c]">
            Project details
            <textarea name="message" required rows={5} placeholder="Tell us what you want to build" className="resize-none rounded-2xl border border-[#17233c]/15 bg-[#f7f5ef] px-4 py-3 text-sm font-normal outline-none transition-colors focus:border-[#f36b4f]" />
          </label>
          <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#f36b4f] px-6 py-[18px] text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Send message <ArrowUpRight /></button>
        </form>
      </section>

      <footer className="bg-[#1e1b4b] text-white">
        <div className={`${shell} grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 py-[70px] max-lg:grid-cols-2 max-md:gap-y-10`}>
          <a href="#top" className="flex items-start gap-2 text-[22px] font-extrabold tracking-[-1px] max-md:col-span-2">
            <span className="grid size-[31px] place-items-center rounded-full bg-[#f36b4f] text-white"><Spark /></span>Northstar<span className="-ml-2 text-[#f36b4f]">.</span>
          </a>
          <p className="m-0 max-w-[240px] font-serif text-[22px] leading-snug text-[#a5abba] max-lg:hidden">Big studio.<br />Big energy.</p>
          <div className="flex flex-col gap-4 text-xs text-[#b1b6c1]">
            <span className="mb-1 text-[9px] font-bold tracking-[2px] text-[#6f7788] uppercase">Explore</span>
            {["Work", "Services", "Process", "About"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#f36b4f]">{item}</a>)}
          </div>
          <div className="flex flex-col gap-4 text-xs text-[#b1b6c1]">
            <span className="mb-1 text-[9px] font-bold tracking-[2px] text-[#6f7788] uppercase">Connect</span>
            <a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Dribbble</a><a href="mailto:hello@northstar.studio">Email</a>
          </div>
        </div>
        <div className={`${shell} flex justify-between border-t border-white/10 py-6 text-[9px] text-[#6f7788] max-[430px]:flex-col max-[430px]:gap-2`}><span>(c) 2026 Northstar Studio. All rights reserved.</span><span>Made with care and plenty of coffee.</span></div>
      </footer>
    </main>
  );
}

function Project({ type }: { type: "finance" | "health" }) {
  const finance = type === "finance";
  return (
    <article className={`relative min-h-[620px] overflow-hidden p-7 text-white max-md:min-h-[540px] max-md:p-5 ${finance ? "bg-[#db7253]" : "bg-[#7771a5]"}`}>
      <div className="absolute top-[50px] left-1/2 size-[500px] -translate-x-1/2 rounded-full border border-white/15 shadow-[0_0_0_70px_rgba(255,255,255,.04),0_0_0_140px_rgba(255,255,255,.03)]" />
      <div className="relative z-10 flex justify-between text-[9px] tracking-[1.7px]"><span>{finance ? "FINTECH" : "HEALTH"} · 2026</span><span className="text-lg">↗</span></div>
      {finance ? (
        <div className="absolute top-[90px] left-1/2 h-[430px] w-[265px] -translate-x-1/2 -rotate-3 overflow-hidden rounded-[39px] border-[8px] border-[#1a2235] bg-[#f7f5ef] shadow-[0_35px_50px_rgba(76,37,29,.25)]">
          <div className="absolute top-[5px] left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#1a2235]" />
          <div className="h-full px-[22px] pt-16 text-[#17233c]">
            <small className="text-[9px] text-[#858994]">Available balance</small><strong className="my-2 block text-[28px]">$24,860.40</strong>
            <div className="flex gap-2"><i className="flex-1 rounded-lg bg-[#17233c] p-2 text-center text-[9px] not-italic text-white">↑ Send</i><i className="flex-1 rounded-lg bg-[#e7e3d9] p-2 text-center text-[9px] not-italic">＋ Add</i></div>
            <div className="mt-6 flex flex-col gap-4 text-[9px]"><b className="text-xs">Recent activity</b><span className="flex justify-between rounded-lg bg-white p-2.5">AI Cloud <em className="not-italic text-[#bf5440]">−$24</em></span><span className="flex justify-between rounded-lg bg-white p-2.5">Deposit <em className="not-italic text-[#23945f]">+$850</em></span></div>
          </div>
        </div>
      ) : (
        <div className="absolute top-[102px] left-1/2 h-[390px] w-[390px] -translate-x-1/2 rotate-3 rounded-md bg-[#f5f2eb] p-9 text-[#17233c] shadow-[0_30px_55px_rgba(46,38,75,.25)] max-md:h-[365px] max-md:w-[330px] max-md:p-7">
          <div className="flex justify-between text-[10px]"><span>Good morning, Maya</span><i>◒</i></div>
          <h4 className="my-5 font-serif text-[31px]">Your body is ready.</h4>
          <div className="flex items-center justify-between">
            <div className="font-serif text-[61px]">87<small className="block font-sans text-[7px] tracking-widest text-[#85818d]">DAILY SCORE</small></div>
            <div className="relative grid size-[110px] place-items-center">
              <i className="absolute size-[105px] -rotate-[25deg] rounded-full border-8 border-[#ee7656] border-r-[#ded9cc]" /><i className="absolute size-[79px] rounded-full border-8 border-[#8d84b8] border-b-[#ded9cc]" /><i className="absolute size-[53px] rounded-full border-8 border-[#efbd67] border-l-[#ded9cc]" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 border-t border-[#ddd8cc] pt-5 text-[8px] text-[#85818d]"><span className="flex flex-col"><b className="mb-1 text-[17px] text-[#17233c]">7h 42m</b>Sleep</span><span className="flex flex-col"><b className="mb-1 text-[17px] text-[#17233c]">68 bpm</b>Resting heart</span></div>
        </div>
      )}
      <div className="absolute bottom-7 left-7 z-10 max-md:left-5"><h3 className="mb-1 text-2xl font-bold">{finance ? "Flow Finance" : "Onda Health"}</h3><p className="text-xs text-white/80">{finance ? "A calmer way to manage money." : "Wellbeing that fits real life."}</p></div>
    </article>
  );
}