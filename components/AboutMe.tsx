"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const ABOUT_ME_TEXT = `👋 I'm Nehal Shaikh, a Jr Frontend Developer at Scott Sports SA, where I build with Next.js. I got here after three years in data management within the non-IT sector — a background that taught me how to work carefully with detail and process before I ever wrote a line of code.

Making the leap into frontend development meant starting from the fundamentals: HTML, CSS, and JavaScript, then React, and now Next.js as part of a live commercial codebase. Every day at work sharpens that foundation a little more.

I bring the problem-solving habits and attention to detail from my earlier career into every component I build, and I'm still very much in learning mode — picking up patterns from the codebases I work in and the projects I build on the side.

Let's connect, collaborate, and build something great together! 💻✨`;

export default function AboutMe() {
  const [started, setStarted] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [completed, setCompleted] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  function handleStart() {
    setStarted(true);

    const keyboardSound = new Audio("/assets/Click sound.wav");
    keyboardSound.volume = 0.2;
    keyboardSound.play();

    setTimeout(() => {
      let i = 0;
      const speed = 20;

      function typeWriter() {
        if (i < ABOUT_ME_TEXT.length) {
          i++;
          setDisplayed(ABOUT_ME_TEXT.substring(0, i));

          const randomSpeed = speed + (Math.random() * 20 - 10);
          setTimeout(typeWriter, randomSpeed);

          if (i % 100 === 0) {
            textRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        } else {
          setCompleted(true);
        }
      }

      typeWriter();
    }, 800);
  }

  return (
    <Reveal>
      <section id="about-me" className="mb-10">
        <h2 className="text-primary">About Me</h2>
        <div className="relative min-h-75">
          {!started && (
            <button
              onClick={handleStart}
              className="animate-pulse-glow absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border-none bg-linear-to-br from-primary to-secondary px-9 py-4.5 font-sans text-xl font-semibold tracking-wider text-white uppercase shadow-[0_10px_25px_rgba(99,102,241,0.4)] transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_15px_35px_rgba(99,102,241,0.5)] active:scale-[0.98]"
            >
              <span>Discover My Story</span>
              <span className="text-2xl">⌨️</span>
            </button>
          )}
          <p
            ref={textRef}
            id="typing-text"
            className={`font-mono pt-2 text-base leading-relaxed whitespace-pre-wrap opacity-0 transition-all duration-700 sm:text-lg ${
              started ? "opacity-100 translate-y-0" : "translate-y-5"
            } ${completed ? "completed" : ""}`}
          >
            {displayed}
          </p>
        </div>
      </section>
    </Reveal>
  );
}
