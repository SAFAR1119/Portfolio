"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { personal } from "../../data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Hello, I'm
          </p>

          <h1 className="mt-5 text-6xl font-black leading-tight">
            {personal.name}
          </h1>

          <div className="mt-6 text-3xl font-bold text-blue-500">

            <TypeAnimation
              sequence={[
                ...personal.roles.flatMap((role) => [role, 1800]),
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {personal.about}
          </p>

          {/* Status */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

            <span className="text-green-400">
              Available for Software Engineering Opportunities
            </span>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href={personal.resume}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
            >
              <Download size={18} />
              Resume
            </Link>

            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Social */}

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-14 grid grid-cols-3 gap-5"
>

          <Stat number="10+" label="Months Experience" />

         <Stat number="3+" label="Projects Built" />

          <Stat number="100%" label="Responsive" />

         </motion.div>

          <div className="mt-10 flex gap-5">

            <Link href={personal.github} target="_blank">
              <FaGithub className="text-3xl transition hover:text-blue-500" />
            </Link>

            <Link href={personal.linkedin} target="_blank">
              <FaLinkedin className="text-3xl transition hover:text-blue-500" />
            </Link>

            <Link href={`mailto:${personal.email}`}>
              <Mail className="h-8 w-8 transition hover:text-blue-500" />
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >

          <div className="relative">
            <motion.div
           animate={{ y: [-10, 10, -10] }}
           transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-10 top-10 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
>
   ☕ Java
 </motion.div>

  <motion.div
  animate={{ y: [10, -10, 10] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute -right-28 top-24 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
>
  🍃 Spring Boot
  </motion.div>

  <motion.div
  animate={{ y: [-8, 8, -8] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute -left-15 bottom-12 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
>
  ⚛ Next.js
 </motion.div>

  <motion.div
  animate={{ y: [8, -8, 8] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute -right-18 bottom-10 rounded-xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
>
  🗄 MySQL
  </motion.div>

           <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/30 via-cyan-500/20 to-purple-500/30 blur-[80px]" />

            <div className="relative rounded-full border-4 border-blue-500 p-2 shadow-2xl">

              <Image
                src={personal.profile}
                alt={personal.name}
                width={380}
                height={380}
                priority
                className="rounded-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>
      <motion.div
       animate={{ y: [0, 12, 0] }}
       transition={{ repeat: Infinity, duration: 2 }}
       className="mt-20 flex justify-center"
>
     <a
        href="#about"
        className="flex flex-col items-center text-zinc-500 transition hover:text-blue-500"
  >
        <span className="mb-2 text-sm uppercase tracking-widest">
     Scroll
      </span>

     <div className="h-12 w-6 rounded-full border border-white/20">
      <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-blue-500" />
     </div>
     </a>
     </motion.div>
    </section>
  );

  type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition hover:border-blue-500/40 hover:-translate-y-1">
      <h3 className="text-3xl font-black text-blue-500">
        {number}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}
}