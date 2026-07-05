"use client";

import Image from "next/image";
import { useState } from "react";
import { socialLinks } from "@/lib/data";
import Reveal from "./Reveal";

const connectLinks = [
  {
    href: socialLinks.email,
    label: "Email",
    sublabel: "nehal4dev@gmail.com",
    icon: "/assets/gmail.png",
    external: false,
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    sublabel: "Connect professionally",
    icon: "/assets/Linkdin.png",
    external: true,
  },
  {
    href: socialLinks.github,
    label: "GitHub",
    sublabel: "Browse my code",
    icon: "/assets/githyb.png",
    external: true,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:nehal4dev@gmail.com?subject=${subject}&body=${body}`;

    setStatus("Opening your email client…");
    setName("");
    setMessage("");
  }

  return (
    <Reveal>
      <section id="contact" className="mb-10 py-8">
        <h2 className="text-primary">Get In Touch</h2>
        <p className="mt-1 max-w-2xl opacity-80">
          Have a project in mind or just want to talk frontend and Next.js?
          Send a message or reach out directly below.
        </p>
        <div className="mt-6 grid min-w-0 items-stretch gap-8 md:grid-cols-2">
          <div className="min-w-0 rounded-lg bg-card p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:border dark:border-[#333] dark:bg-card-dark">
            <form onSubmit={handleSubmit} className="flex h-full flex-col">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-[#ddd] bg-card p-3.5 font-sans text-text transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)] focus:outline-none dark:border-[#444] dark:bg-card-dark dark:text-text-dark"
                />
              </div>
              <div className="mb-6 flex-1">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-30 w-full resize-y rounded-md border border-[#ddd] bg-card p-3.5 font-sans text-text transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)] focus:outline-none dark:border-[#444] dark:bg-card-dark dark:text-text-dark"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md border-none bg-linear-to-br from-primary to-secondary px-6 py-3.5 font-sans font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-secondary hover:to-[#3730a3]"
              >
                Send Message
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
            {status && (
              <div className="mt-4 rounded-md bg-primary/15 p-3.5 text-center text-secondary">
                {status}
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-6 rounded-lg bg-card p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:border dark:border-[#333] dark:bg-card-dark">
            <h3 className="m-0">Or connect directly</h3>
            <div className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-md border border-transparent p-3 text-text no-underline transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:translate-x-1.25 dark:text-text-dark"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={22}
                      height={22}
                      sizes="22px"
                      loading="lazy"
                      className="h-5.5 w-5.5"
                    />
                  </span>
                  <span>
                    <span className="block font-semibold">{link.label}</span>
                    <span className="block text-sm opacity-70">
                      {link.sublabel}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
