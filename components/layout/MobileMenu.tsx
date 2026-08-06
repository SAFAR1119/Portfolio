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
  "Skills",
  "Contact",
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-md lg:hidden">
      <div className="mobile-menu-panel absolute right-0 top-0 h-full w-72 border-l p-6">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-bold">Menu</span>

          <button onClick={onClose} className="rounded-full p-2 hover:bg-[var(--surface-raised)]" aria-label="Close menu">
            <X />
          </button>
        </div>

        <div className="space-y-1">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="mobile-menu-link block py-4 text-lg font-medium transition"
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
