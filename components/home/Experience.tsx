"use client";

import { motion } from "framer-motion";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            Experience
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Professional Journey
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            10+ months of professional experience building Full Stack applications
            using Java Spring Boot, REST APIs, MySQL and modern software
            development practices.
          </p>
        </motion.div>

        <div className="relative mt-20 border-l border-white/10 pl-10">

          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-20"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-13 top-3 h-5 w-5 rounded-full border-4 border-black ${
                  job.promoted ? "bg-green-500" : "bg-blue-500"
                }`}
              />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <p className="text-sm uppercase tracking-widest text-blue-500">
                      {job.company}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      {job.duration} • {job.period}
                    </p>
                  </div>

                  {job.promoted && (
                    <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
                      Promoted from Internship
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-3 text-zinc-400">
                  {job.description.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}