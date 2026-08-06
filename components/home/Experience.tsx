"use client";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-y py-24 sm:py-32" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title mt-4">Learning by<br />shipping.</h2>
        <div className="mt-16 border-t" style={{ borderColor: "var(--line)" }}>
          {experiences.map((job) => (
            <article key={`${job.company}-${job.role}`} className="grid gap-5 border-b py-9 md:grid-cols-[180px_1fr]" style={{ borderColor: "var(--line)" }}>
              <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>{job.duration}</p>
              <div>
                <p className="eyebrow">{job.company}</p>
                <h3 className="mt-2 font-serif text-3xl tracking-tight">{job.role}</h3>
                <ul className="mt-6 grid gap-2 leading-7" style={{ color: "var(--muted)" }}>
                  {job.description.slice(0, 3).map((item) => <li key={item}>— {item}</li>)}
                </ul>
                <p className="mt-6 text-sm" style={{ color: "var(--accent)" }}>{job.tech.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
