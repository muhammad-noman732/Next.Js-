"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathName = usePathname();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-md transition duration-200 ${
      pathName === path
        ? "bg-white text-teal-600 font-semibold"
        : "text-white hover:bg-teal-500"
    }`;

  return (
    <div>
      <ul className="flex flex-row gap-6 items-center bg-teal-600 h-20 px-8">
        <li>
          <Link href="/about" className={linkStyle("/about")}>
            About page
          </Link>
        </li>

        <li>
          <Link href="/services" className={linkStyle("/services")}>
            Services page
          </Link>
        </li>

        <li>
          <Link href="/blog" className={linkStyle("/blog")}>
            Blog page
          </Link>
        </li>

        <li>
          <Link href="/file" className={linkStyle("/file")}>
            File page
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
