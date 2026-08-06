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
    <footer className="border-t" style={{ borderColor: "var(--line)", backgroundColor: "var(--surface)" }}>
      <div className="mx-auto max-w-7xl px-6 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3"
        >

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black">
              Safar Ahmed
            </h2>

            <p className="mt-4 leading-7" style={{ color: "var(--muted)" }}>
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
                    className="transition hover:text-[var(--accent)]"
                    style={{ color: "var(--muted)" }}
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
                className="rounded-xl border p-3 transition hover:border-[var(--accent)] hover:bg-[var(--surface-raised)]"
                style={{ borderColor: "var(--line)" }}
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href={contact.linkedin}
                target="_blank"
                className="rounded-xl border p-3 transition hover:border-[var(--accent)] hover:bg-[var(--surface-raised)]"
                style={{ borderColor: "var(--line)" }}
              >
                <FaLinkedin size={22} />
              </Link>

            </div>

            <p className="mt-6 break-all" style={{ color: "var(--muted)" }}>
              {contact.email}
            </p>

          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row" style={{ borderColor: "var(--line)" }}>

          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Safar Ahmed. All Rights Reserved.
          </p>

          <Link
            href="#"
            className="rounded-full p-3 text-white transition hover:scale-110"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <ArrowUp size={18} />
          </Link>

        </div>

      </div>
    </footer>
  );
}
