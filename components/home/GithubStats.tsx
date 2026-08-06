"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const username = "SAFAR1119";

export default function GithubStats() {
  return (
    <section id="github" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 sm:py-32">
      <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-start">
        <div>
          <p className="eyebrow">Open source</p>
          <h2 className="section-title mt-4">Work in<br />progress.</h2>
          <p className="mt-7 max-w-sm leading-7" style={{ color: "var(--muted)" }}>I keep project code, experiments, and the occasional unfinished idea on GitHub.</p>
          <Link href={`https://github.com/${username}`} target="_blank" className="mt-8 inline-flex items-center gap-2 border-b-2 pb-1 font-semibold" style={{ borderColor: "var(--accent)" }}>
            <FaGithub /> Visit my GitHub <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="border-y" style={{ borderColor: "var(--line)" }}>
          <div className="grid gap-5 border-b py-6 sm:grid-cols-[140px_1fr]" style={{ borderColor: "var(--line)" }}>
            <p className="font-serif text-2xl">Overview</p>
            <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=686761&title_color=c84d2f&icon_color=c84d2f`} alt="GitHub contribution overview" className="w-full max-w-md" />
          </div>
          <div className="grid gap-5 py-6 sm:grid-cols-[140px_1fr]">
            <p className="font-serif text-2xl">Languages</p>
            <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&text_color=686761&title_color=c84d2f`} alt="Most used programming languages" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
