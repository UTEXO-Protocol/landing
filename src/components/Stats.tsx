export default function Stats() {
  return (
    <section className="relative bg-[#D4D4D4] px-4 sm:px-0">
      <div className="w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] py-8 sm:py-12 lg:py-0 border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] mx-auto px-0 sm:px-6 lg:px-0 flex justify-center sm:justify-end lg:justify-end items-start">
        <div className="text-center sm:text-right lg:text-right pr-0 sm:pr-4 lg:pr-[32px]">
          <div 
            className="text-[60px] sm:text-[90px] lg:text-[130px] font-medium leading-tight sm:leading-[70px] lg:leading-[82px] tracking-[-0.03em] text-black mb-2"
            style={{ fontFamily: "'PP Mori', sans-serif", fontWeight: 500 }}
          >
            $200B+
          </div>
          <p className="text-[10px] pb-12 sm:pb-16 lg:pb-[100px] sm:text-[11px] lg:text-[12px] pt-2 sm:pt-3 lg:pt-4 px-3 text-left sm:text-left lg:text-left text-gray-600 uppercase tracking-wider">
            In stablecoin issuance
          </p>
        </div>
      </div>
    </section>
  );
}

