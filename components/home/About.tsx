"use client";

import { motion } from "framer-motion";
import { about } from "../../data/about";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-500 font-semibold uppercase tracking-[0.2em]">
          About Me
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          {about.title}
        </h2>

        <p className="mt-8 max-w-3xl leading-8 text-zinc-500 whitespace-pre-line">
          {about.description}
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        <motion.div
          initial={{ opacity:0,x:-30 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">
            Education
          </h3>

          <div className="mt-6 space-y-3">
            <p className="font-semibold">
              {about.education.degree}
            </p>

            <p className="text-zinc-500">
              {about.education.university}
            </p>

            <p className="text-blue-500">
              {about.education.year}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0,x:30 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">
            Currently Learning
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {about.currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full bg-blue-600/10 px-4 py-2 text-sm text-blue-500"
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