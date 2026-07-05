"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { youtubeChannelUrl, youtubeVideos } from "@/lib/data";
import Reveal from "./Reveal";

export default function VideoCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  function scroll(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  }

  return (
    <Reveal>
      <section id="videos" className="mb-10 py-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-primary">YouTube</h2>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary no-underline hover:underline"
          >
            Visit my channel →
          </a>
        </div>

        <div className="relative mt-6">
          <div
            ref={scrollerRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="w-70 shrink-0 snap-start rounded-lg bg-card shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:bg-card-dark"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg bg-black">
                  {playingId === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(video.id)}
                      aria-label={`Play ${video.title}`}
                      className="group h-full w-full"
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        sizes="280px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                          <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current text-primary">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  )}
                </div>
                <p className="p-3 text-sm leading-snug font-semibold">
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll videos left"
            className="absolute top-[calc(50%-24px)] -left-3 hidden h-9 w-9 items-center justify-center rounded-full bg-card text-primary shadow-[0_2px_6px_rgba(0,0,0,0.2)] hover:bg-primary/10 sm:flex dark:bg-card-dark"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll videos right"
            className="absolute top-[calc(50%-24px)] -right-3 hidden h-9 w-9 items-center justify-center rounded-full bg-card text-primary shadow-[0_2px_6px_rgba(0,0,0,0.2)] hover:bg-primary/10 sm:flex dark:bg-card-dark"
          >
            ›
          </button>
        </div>
      </section>
    </Reveal>
  );
}
