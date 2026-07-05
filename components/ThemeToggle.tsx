"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollPosition = 0;
    const scrollThreshold = 80;
    let waiting = false;

    function handleScroll() {
      const currentScrollPosition = window.scrollY || window.pageYOffset;
      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > scrollThreshold
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollPosition = currentScrollPosition;
    }

    function throttled() {
      if (!waiting) {
        handleScroll();
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, 80);
      }
    }

    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  if (!isClient) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      id="theme-toggle"
      aria-label="Toggle dark mode"
      title="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`fixed top-3.75 right-3.75 z-1000 flex h-12.5 w-12.5 items-center justify-center rounded-full border-none bg-white/20 text-xl backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out hover:scale-110 hover:bg-white/30 ${
        hidden ? "pointer-events-none -translate-y-5 opacity-0" : "opacity-100"
      }`}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
