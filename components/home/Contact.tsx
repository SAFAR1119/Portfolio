"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { contact } from "../../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-500">
            Contact
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-500">
            I'm always interested in internship opportunities,
            freelance work, and exciting software projects.
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />

          <ContactCard
            icon={<FaGithub size={24} />}
            title="GitHub"
            value="View Profile"
            href={contact.github}
          />

          <ContactCard
            icon={<FaLinkedin size={24} />}
            title="LinkedIn"
            value="Connect with me"
            href={contact.linkedin}
          />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Location
              </h3>
            </div>

            <p className="mt-5 text-zinc-400">
              {contact.location}
            </p>

            <Link
              href={contact.resume}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-blue-700"
            >
              <Download size={18} />
              Download Resume
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
};

function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="text-blue-500">
          {icon}
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>

      <Link
        href={href}
        target="_blank"
        className="mt-6 block break-all text-zinc-400 transition hover:text-blue-500"
      >
        {value}
      </Link>
    </motion.div>
  );
}