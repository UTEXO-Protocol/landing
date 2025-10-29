export default function DevHero() {
  return (
    <section className="relative w-full border-b border-neutral-800 bg-black text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 py-16 text-center md:py-24">
        {/* Kicker */}
        <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 font-mono">
          Build. Scale. Connect.
        </div>

        {/* Headline */}
        <h1 className="max-w-[800px] text-balance text-[32px] leading-[1.1] text-white font-[500] md:text-[44px]">
          The Infrastructure Cloud<br className="hidden md:block" />
          for RGB and Lightning Network.
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-[620px] text-[13px] leading-relaxed text-neutral-400 font-mono">
          Simplify deployment and management of RGB and Lightning with
          enterprise-grade reliability and zero DevOps overhead.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#request-demo"
            className="inline-flex items-center justify-center rounded-[6px] border border-neutral-700 bg-white px-3 py-[10px] text-[11px] font-mono font-medium uppercase leading-none tracking-[0.08em] text-black hover:bg-neutral-200"
          >
            <span className="mr-1">Request Demo</span>
            <span aria-hidden>➔</span>
          </a>
          <a
            href="#docs"
            className="inline-flex items-center justify-center rounded-[6px] border border-neutral-700 bg-neutral-900 px-3 py-[10px] text-[11px] font-mono font-medium uppercase leading-none tracking-[0.08em] text-white hover:bg-neutral-800"
          >
            <span className="mr-1">View Docs</span>
            <span aria-hidden>➔</span>
          </a>
        </div>

        {/* Floating ring asset placeholder */}
        <div className="pointer-events-none absolute left-[10%] top-[60%] hidden h-32 w-32 -translate-y-1/2 md:block">
          {/* swap src with your ring asset */}
          <img
            src="/ring-dev.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
