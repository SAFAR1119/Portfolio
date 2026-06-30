"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNestjs,
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiPostman,
  SiCplusplus,
  SiC,
  SiSharp,
} from "react-icons/si";

const icons: Record<string, React.ReactNode> = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <FaBootstrap />,
  "Node.js": <FaNodeJs />,
  NestJS: <SiNestjs />,
  "Spring Boot": <SiSpringboot />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  Docker: <FaDocker />,
  Figma: <SiFigma />,
  Postman: <SiPostman />,
  Java: <FaJava />,
  Python: <FaPython />,
  "C++": <SiCplusplus />,
  C: <SiC />,
  "C#": <SiSharp />,
};

const colors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-400",
  Backend: "from-emerald-500 to-green-400",
  Database: "from-orange-500 to-yellow-400",
  Programming: "from-purple-500 to-pink-500",
  Tools: "from-red-500 to-orange-400",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Tech Stack
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            Technologies I use to build modern, scalable and
            production-ready software.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => (

            <motion.div

              key={category.title}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                delay: index * 0.15,
              }}

              whileHover={{
                y: -10,
              }}

              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "

            >

              <div
                className={`
                absolute
                inset-0
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                ${colors[category.title]}
              `}
                style={{
                  opacity: 0.08,
                }}
              />

              <div className="relative">

                <div
                  className={`
                  inline-flex
                  rounded-full
                  bg-gradient-to-r
                  ${colors[category.title]}
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-white
                `}
                >
                  {category.title}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <motion.div

                      whileHover={{
                        scale: 1.08,
                      }}

                      key={skill}

                      className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:border-blue-500
                      hover:shadow-lg
                      hover:shadow-blue-500/20
                    "

                    >

                      <span className="text-2xl">

                        {icons[skill]}

                      </span>

                      <span className="font-medium">

                        {skill}

                      </span>

                    </motion.div>

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