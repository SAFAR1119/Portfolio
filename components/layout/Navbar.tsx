"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "../theme-toggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between border-b px-6 py-5 backdrop-blur-md lg:px-10"
          style={{ borderColor: "var(--line)", backgroundColor: "color-mix(in srgb, var(--background) 88%, transparent)" }}
        >
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight"
          >
            Safar<span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          <div className="hidden gap-7 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:opacity-60"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
