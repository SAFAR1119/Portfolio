"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            Featured Projects
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Things I've Built
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            A collection of projects demonstrating my passion for
            software engineering and modern web development.
          </p>
        </motion.div>

        <div className="mt-20 space-y-16">

          {projects.map((project, index) => (

            <motion.div

              key={project.title}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                delay: index * 0.15,
              }}

              className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition
              hover:border-blue-500/50
            "

            >

              <div className="grid lg:grid-cols-2">

                <div className="relative h-[320px]">

                  <div className="group relative h-[320px] overflow-hidden">

                  {project.image ? (
                     <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                    "
               />
         ) : (
               <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-500">
                  Screenshot Coming Soon
                  </div>
             )}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/70
      via-black/10
      to-transparent
    "
  />

</div>
                    

                </div>

                <div className="flex flex-col justify-center p-10">

                  {project.featured && (
                    <span
                      className={`
                       ml-3
                     rounded-full
                     px-4
                     py-2
                     text-sm
                     font-semibold
                    ${
                       project.status === "Completed"
                       ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                     }
                `}
         >
            {project.status}


                    </span>

                  )}

                  <h3 className="text-3xl font-bold">

                    {project.title}

                  </h3>

                  <p className="mt-6 leading-8 text-zinc-500">

                    {project.description}

                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech) => (

                      <span

                        key={tech}

                        className="
                        rounded-x1
                        border
                        border-blue-500/30
                        bg-blue-500/10
                        px-4
                        py-2
                        text-sm
                        text-blue-400
                      "

                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  <div className="mt-10 flex gap-4">

                    <Link

                      href={project.github}

                      target="_blank"

                      className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      px-6
                      py-3
                      transition
                      hover:border-blue-500
                      hover:bg-blue-500/10
                    "

                    >

                      <FaGithub />

                      GitHub

                    </Link>

                    {project.live && (

                      <Link

                        href={project.live}

                        target="_blank"

                        className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        text-white
                        transition
                        hover:scale-105
                        hover:bg-blue-700
                      "

                      >

                        Live Demo

                        <HiOutlineExternalLink />

                      </Link>

                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}