"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/search", label: "Search" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
          <span className="text-sm font-semibold tracking-wide text-slate-900 sm:text-base">
            Data Fetching
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
