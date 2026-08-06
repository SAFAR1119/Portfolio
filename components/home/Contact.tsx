"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "../../data/contact";

const contactLinks = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { label: "GitHub", value: "github.com/SAFAR1119", href: contact.github, icon: <FaGithub />, external: true },
  { label: "LinkedIn", value: "Let’s connect", href: contact.linkedin, icon: <FaLinkedin />, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t py-24 sm:py-32" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Get in touch</p>
        <div className="mt-4 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h2 className="section-title">Let&apos;s make something useful.</h2>
            <p className="mt-8 max-w-xl text-lg leading-8" style={{ color: "var(--muted)" }}>I&apos;m open to software engineering opportunities, collaborative projects, and thoughtful conversations about building better products.</p>
            <Link href={contact.resume} className="mt-9 inline-flex items-center gap-2 border-b-2 pb-1 font-semibold" style={{ borderColor: "var(--accent)" }}>
              <Download size={17} /> Download résumé
            </Link>
          </div>

          <address className="not-italic">
            <div className="border-y" style={{ borderColor: "var(--line)" }}>
              {contactLinks.map((item) => (
                <Link key={item.label} href={item.href} target={item.external ? "_blank" : undefined} className="group flex items-center justify-between gap-5 border-b py-6 last:border-0" style={{ borderColor: "var(--line)" }}>
                  <div><p className="eyebrow">{item.label}</p><p className="mt-2 font-serif text-2xl tracking-tight">{item.value}</p></div>
                  <span className="flex h-9 w-9 items-center justify-center border group-hover:translate-x-1 group-hover:-translate-y-1" style={{ borderColor: "var(--line)", color: "var(--accent)" }}>{item.icon ?? <ArrowUpRight size={18} />}</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>Working from {contact.location}</p>
          </address>
        </div>
      </div>
    </section>
  );
}
