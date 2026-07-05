import Image from "next/image";
import ResumeButton from "./ResumeButton";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center overflow-hidden bg-primary px-4 py-8 text-center text-white transition-all duration-500 max-[480px]:flex-row max-[480px]:flex-wrap max-[480px]:justify-start max-[480px]:gap-12 max-[480px]:pt-12.5 max-[480px]:pb-6 max-[480px]:pl-4 max-[480px]:text-left">
      <div className="pointer-events-none absolute -top-12.5 -left-12.5 h-50 w-50 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,rgba(99,102,241,0)_70%)]" />
      <div className="pointer-events-none absolute -right-7.5 -bottom-7.5 h-37.5 w-37.5 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,rgba(99,102,241,0)_70%)]" />

      <Image
        src="/assets/dp.jpg"
        alt="profile image"
        width={150}
        height={150}
        sizes="(max-width: 480px) 80px, (max-width: 768px) 120px, 150px"
        priority
        className="relative z-2 h-37.5 w-37.5 rounded-full border-[5px] border-white object-cover shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] max-[768px]:h-30 max-[768px]:w-30 max-[480px]:h-20 max-[480px]:w-20"
      />

      <div className="relative z-2 mt-6 leading-snug max-[480px]:mt-0">
        <h1 className="m-0 text-4xl font-bold tracking-wide text-shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[768px]:text-3xl">
          Nehal Shaikh
        </h1>
        <p className="mt-2 mb-0 text-lg font-normal opacity-90 max-[768px]:text-[1.1rem]">
          Frontend Developer
        </p>
      </div>

      <ResumeButton />
    </header>
  );
}
