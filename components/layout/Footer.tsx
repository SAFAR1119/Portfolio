"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "../../data/contact";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3"
        >

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-white">
              Safar Ahmed
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
              Software Engineer passionate about building scalable,
              modern and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg">
              Connect
            </h3>

            <div className="mt-4 flex gap-4">

              <Link
                href={contact.github}
                target="_blank"
                className="rounded-xl border border-zinc-200 dark:border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href={contact.linkedin}
                target="_blank"
                className="rounded-xl border border-zinc-200 dark:border-white/10 p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <FaLinkedin size={22} />
              </Link>

            </div>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 break-all">
              {contact.email}
            </p>

          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-white/10 md:flex-row">

          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Safar Ahmed. All Rights Reserved.
          </p>

          <Link
            href="#"
            className="rounded-full bg-blue-600 p-3 text-white transition hover:scale-110 hover:bg-blue-700"
          >
            <ArrowUp size={18} />
          </Link>

        </div>

      </div>
    </footer>
  );
}