"use client";

import { motion } from "framer-motion";
import { timeline } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            Journey
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Experience & Education
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            My journey into software engineering and modern web development.
          </p>

        </motion.div>

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-500/30" />

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative pl-20"
              >

                {/* Timeline Dot */}

                <div
                  className="
                  absolute
                  left-0
                  top-2
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-blue-500
                  bg-zinc-900
                  shadow-lg
                  shadow-blue-500/40
                "
                >
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                </div>

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-2
                  hover:border-blue-500/50
                "
                >

                  <span className="text-blue-500 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-medium text-zinc-400">
                    {item.company}
                  </p>

                  <p className="mt-5 leading-8 text-zinc-500">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}