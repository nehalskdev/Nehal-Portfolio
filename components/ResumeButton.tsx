"use client";

import { useEffect, useState } from "react";

export default function ResumeButton() {
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setPulsing(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  function playClickSound() {
    const keyboardSound = new Audio("/assets/Click sound.wav");
    keyboardSound.volume = 0.2;
    keyboardSound.play();
  }

  return (
    <a
      href="/assets/Nehal CV (BW).pdf"
      download="Nehal-Shaikh-Resume.pdf"
      onClick={playClickSound}
      className={`absolute top-1/2 right-8 z-10 flex -translate-y-1/2 items-center gap-2 rounded-full border-2 border-white bg-white/20 px-5 py-2.5 font-[family-name:var(--font-heading)] text-sm font-semibold text-white no-underline backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary hover:shadow-lg max-[480px]:static max-[480px]:order-3 max-[480px]:mt-4 max-[480px]:translate-y-0 max-[480px]:self-center max-[480px]:px-4 max-[480px]:py-2 max-[480px]:text-xs ${
        pulsing ? "animate-pulse-white" : ""
      }`}
    >
      Download Resume
      <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </svg>
    </a>
  );
}
