"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="border-y py-24 sm:py-32" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">A few things<br />I&apos;ve made.</h2></div>
          <p className="max-w-lg text-lg leading-8" style={{ color: "var(--muted)" }}>A small selection of projects where I took ideas from the first rough outline to working software.</p>
        </div>

        <div className="mt-16 divide-y" style={{ borderColor: "var(--line)" }}>
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="grid gap-7 py-10 first:pt-0 lg:grid-cols-[80px_1fr_1.05fr] lg:gap-10">
              <p className="font-serif text-2xl" style={{ color: "var(--accent)" }}>0{index + 1}</p>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.13em]" style={{ color: "var(--muted)" }}>{project.tech.slice(0, 2).join(" · ")}</p>
                <h3 className="mt-3 font-serif text-4xl tracking-[-.04em]">{project.title}</h3>
                <p className="mt-5 max-w-md leading-7" style={{ color: "var(--muted)" }}>{project.description}</p>
                <div className="mt-7 flex gap-5 text-sm font-semibold">
                  {project.github && <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 hover:opacity-60"><FaGithub className="text-base" /> Code</Link>}
                  {project.live && !project.live.includes("YOUR-") && <Link href={project.live} target="_blank" className="inline-flex items-center gap-1 hover:opacity-60">Visit <ArrowUpRight size={16} /></Link>}
                </div>
              </div>
              <div className="relative overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                {project.image ? <Image src={project.image} alt={`${project.title} screenshot`} width={900} height={600} unoptimized={project.imageUnoptimized} className="aspect-16/10 h-full w-full object-cover object-top transition duration-500 hover:scale-[1.025]" /> : <div className="aspect-16/10" />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
