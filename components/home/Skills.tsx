"use client";

import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 sm:py-32">
      <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-start">
        <div><p className="eyebrow">Tools I reach for</p><h2 className="section-title mt-4">My working<br />toolkit.</h2></div>
        <div className="divide-y border-y" style={{ borderColor: "var(--line)" }}>
          {skillCategories.map((category) => (
            <div key={category.title} className="grid gap-4 py-6 sm:grid-cols-[140px_1fr]">
              <h3 className="font-serif text-2xl">{category.title}</h3>
              <p className="leading-7" style={{ color: "var(--muted)" }}>{category.skills.join("  ·  ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
