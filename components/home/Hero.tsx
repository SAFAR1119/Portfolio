"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowDownRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../../data/personal";

export default function Hero() {
  return (
    <section id="home" className="site-shell relative border-b" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto grid min-h-[min(760px,100vh)] max-w-7xl items-end gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <div className="pb-3">
          <p className="eyebrow">Based in {personal.location}</p>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.7rem,9vw,8.5rem)] leading-[.82] tracking-[-.075em]">
            Safar<br />Ahmed<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8" style={{ color: "var(--muted)" }}>
            I&apos;m a Java backend and full-stack developer who likes making the complicated parts of a product feel dependable and simple.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="#projects" className="inline-flex items-center gap-2 border-b-2 pb-1 font-semibold" style={{ borderColor: "var(--accent)" }}>
              See selected work <ArrowDownRight size={18} />
            </Link>
            <Link href={personal.resume} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--muted)" }}>
              <Download size={16} /> Download résumé
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-5" aria-label="Social links">
            <Link href={personal.github} target="_blank" aria-label="GitHub"><FaGithub className="text-xl hover:scale-110" /></Link>
            <Link href={personal.linkedin} target="_blank" aria-label="LinkedIn"><FaLinkedin className="text-xl hover:scale-110" /></Link>
            <Link href={`mailto:${personal.email}`} aria-label="Email"><Mail className="h-5 w-5 hover:scale-110" /></Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:mr-6 lg:justify-self-end">
          <div className="absolute -bottom-4 -right-4 h-full w-full border" style={{ borderColor: "var(--accent)" }} />
          <Image src={personal.profile} alt="Portrait of Safar Ahmed" width={600} height={600} priority className="relative aspect-square w-full object-cover object-center grayscale-[15%]" />
          <p className="relative mt-3 text-right text-xs tracking-wide" style={{ color: "var(--muted)" }}>Software engineer · Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}
