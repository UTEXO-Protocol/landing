"use client";

import { useState, useEffect } from "react";

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = 300; // 300 billion as 300B
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out effect
      const current = start + (end - start) * easedProgress;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative bg-[#D4D4D4] px-4 sm:px-0">
      <div className="w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] mx-auto px-0 sm:px-6 lg:px-0 flex justify-center sm:justify-end lg:justify-end items-start">
        <div className="text-center sm:text-right lg:text-right pr-0 sm:pr-4 lg:pr-[32px]">
          <div
            className="text-[60px] sm:text-[90px] lg:text-[130px] font-medium leading-tight sm:leading-[70px] lg:leading-[82px] tracking-[-0.03em] text-black md:mb-2 font-sans"
            style={{ fontWeight: 500 }}
          >
            ${count.toFixed(0)}B+
          </div>
          <p className="text-[10px] pb-12 sm:pb-16 lg:pb-[100px] sm:text-[11px] lg:text-[12px] pt-1 lg:pt-3 px-3 text-left sm:text-left lg:text-left text-black opacity-50 tracking-wider">
            In stablecoin issuance
          </p>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";

// export default function Stats() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = 300000000000; // 300 billion
//     const duration = 2000; // 2 seconds
//     const startTime = performance.now();

//     const animate = (currentTime: number) => {
//       const progress = Math.min((currentTime - startTime) / duration, 1);
//       const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out effect
//       const current = Math.floor(start + (end - start) * easedProgress);

//       setCount(current);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, []);

//   return (
//     <section className="relative bg-[#D4D4D4] px-4 sm:px-0">
//       <div className="w-full sm:w-[640px] md:w-[900px] lg:w-[1320px] border-l-0 sm:border-l-[1px] border-[#C6C6C6] border-r-0 sm:border-r-[1px] mx-auto px-0 sm:px-6 lg:px-0 flex justify-center sm:justify-end lg:justify-end items-start">
//         <div className="text-center sm:text-right lg:text-right pr-0 sm:pr-4 lg:pr-[32px]">
//           <div
//             className="text-[60px] sm:text-[90px] lg:text-[130px] font-medium leading-tight sm:leading-[70px] lg:leading-[82px] tracking-[-0.03em] text-black mb-2 font-sans"
            
//           >
//             ${count.toLocaleString()}+
//           </div>
//           <p className="text-[10px] pb-12 sm:pb-16 lg:pb-[100px] sm:text-[11px] lg:text-[12px] mt-4 sm:pt-3 lg:pt-4 px-3 text-left sm:text-left lg:text-left text-black opacity-50 tracking-wider">
//             In stablecoin issuance
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }