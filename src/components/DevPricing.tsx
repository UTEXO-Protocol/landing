import Button from "./Button";

export default function DevPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$35",
      suffix: "/month",
      bullets: [
        "1 RGB Lightning Node (RLN),",
        "250,000 API calls",
        "Chat support",
      ],
      cta: { label: "start free trial", href: "#start" },
    },
    {
      name: "Growth",
      price: "$99",
      suffix: "/month",
      bullets: [
        "6 RGB Lightning Nodes (RLN),",
        "1,000,000 API calls",
        "Chat support",
      ],
      cta: { label: "start free trial", href: "#start" },
    },
    {
      name: "Scale",
      price: "Custom",
      suffix: "",
      bullets: [
        "Unlimited compute credits",
        "Enterprise SLA, and multi-user",
        "Support",
      ],
      cta: { label: "contact sales", href: "#contact" },
    },
  ];

  return (
    <section id="pricing" className="bg-black text-white">
      <div className="mx-auto w-full sm:w-[640px] md:w-[900px] lg:w-[1320px]
                      border-[#2A2A2A] border-l-0 sm:border-l-[1px] border-r-0 sm:border-r-[1px]">
        {/* Header */}
        <div className="px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
          <div className="text-[13px] tracking-[0.18em] font-mono text-white/70">
            PRICING PLANS
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#2A2A2A]">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={[
                "flex flex-col justify-between",
                "px-6 sm:px-8 lg:px-10 py-10 lg:py-16",
                "border-b border-[#2A2A2A] lg:border-b-0",
                i !== 2 ? "lg:border-r lg:border-[#2A2A2A]" : "",
              ].join(" ")}
            >
              <div>
                <h3 className="font-sans text-[28px] sm:text-[32px] lg:text-[34px] leading-none mb-8">
                  {p.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-3 mb-10">
                  <div className={`font-sans ${p.price === "Custom" ? "text-[68px] sm:text-[84px] lg:text-[66px]" : "text-[84px] sm:text-[96px] lg:text-[106px]"} leading-none`}>
                    {p.price}
                  </div>
                  {p.suffix && (
                    <div className="text-white/70 text-[16px] mb-3">{p.suffix}</div>
                  )}
                </div>

                {/* Bullets */}
                <ul className="space-y-5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[16px] text-white/70 font-sans leading-relaxed"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Button href={p.cta.href} variant="black" className="!w-60">
                  {p.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border to match sections */}
        <div className="border-t border-[#2A2A2A]" />
      </div>
    </section>
  );
}
