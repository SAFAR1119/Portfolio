"use client";

import Link from "next/link";
import { X } from "lucide-react";
import ThemeToggle from "../theme-toggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  "About",
  "Experience",
  "Projects",
  "Github",
  "Contact",
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden">
      <div className="absolute right-0 top-0 h-full w-72 border-l border-white/10 bg-zinc-950 p-6">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-bold">Menu</span>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-5">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="block text-lg transition hover:text-blue-500"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}