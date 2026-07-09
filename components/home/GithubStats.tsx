"use client";

import { motion } from "framer-motion";

const username = "SAFAR1119";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            GitHub
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Development Activity
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            My GitHub activity updates automatically as I build and publish new projects.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`}
              alt="Top Languages"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2"
          >
            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}