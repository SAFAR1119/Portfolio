"use client";

import { motion } from "framer-motion";
import { about } from "../../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">
          About Me
        </p>

        <h2 className="section-title mt-4">
          {about.title}
        </h2>

        <p className="mt-8 max-w-3xl whitespace-pre-line text-lg leading-8" style={{ color: "var(--muted)" }}>
          {about.description}
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        <motion.div
          initial={{ opacity:0,x:-30 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="paper-card p-7"
        >
          <h3 className="font-serif text-3xl tracking-tight">
            Education
          </h3>

          <div className="mt-6 space-y-3">
            <p className="font-semibold">
              {about.education.degree}
            </p>

            <p style={{ color: "var(--muted)" }}>
              {about.education.university}
            </p>

            <p className="font-medium" style={{ color: "var(--accent)" }}>
              {about.education.year}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0,x:30 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="paper-card p-7"
        >
          <h3 className="font-serif text-3xl tracking-tight">
            Currently Learning
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {about.currentlyLearning.map((item) => (
              <span
                key={item}
                className="border px-3 py-1.5 text-sm" style={{ borderColor: "var(--line)", color: "var(--muted)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
