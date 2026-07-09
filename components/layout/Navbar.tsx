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
  "Github",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40">
        <nav
          className="
          mx-auto
          mt-5
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/10
          px-6
          py-4
          shadow-lg
          backdrop-blur-xl
          dark:bg-zinc-900/60
        "
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-wide"
          >
            Safar<span className="text-blue-500">.</span>
          </Link>

          <div className="hidden gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                relative
                hover:text-blue-500
                transition-colors
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-blue-500
                after:transition-all
                hover:after:w-full
              "
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