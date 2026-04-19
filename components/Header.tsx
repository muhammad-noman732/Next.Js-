"use client";
import { useTheme } from "@/context/ThemedContext";
import clsx from "clsx";
import Link from "next/link";
// IMPORT THE HOOK HERE
import { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import DebouncedIndicator from "./DebounceIndicator";

// --- STEP 1: CREATE THE INDICATOR COMPONENT ---
// This must be its own component so it can sit INSIDE the <Link>
function SimpleIndicator() {
  const { pending } = useLinkStatus();

  // If we are not loading, render absolutely nothing.
  if (!pending) return null;

  // If we are loading, show this spinner/text immediately (No Debounce)
  return (
    <span className="ml-2 animate-pulse text-sm text-yellow-300">
      ⏳ Loading...
    </span>
  );
}

function Header() {
  const pathName = usePathname();
  const { theme, toggleTheme } = useTheme();

  const linkStyle = (path: string) =>
    clsx(
      "px-4 py-2 rounded-md transition duration-200 flex items-center", // Added flex here to align text and spinner
      pathName === path
        ? theme === "light"
          ? "bg-white text-teal-600 font-semibold"
          : "bg-gray-700 text-yellow-400 font-semibold"
        : theme === "light"
          ? "text-white hover:bg-teal-500"
          : "text-gray-300 hover:bg-gray-700",
    );

  return (
    <div>
      <ul
        className={clsx(
          "flex flex-row gap-6 items-center h-20 px-8 transition duration-200",
          theme === "light"
            ? "bg-teal-600 text-white"
            : "bg-gray-900 text-gray-200",
        )}
      >
        <li>
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
        </li>

        {/* --- STEP 2: USE THE INDICATOR INSIDE THE LINK --- */}
        <li>
          <Link
            href="/dynamicrendering/test-slug"
            className={linkStyle("/dynamicrendering/test-slug")}
          >
            Dynamic Rendering
            {/* <SimpleIndicator />{" "} */}
            {/* It reads the status of THIS specific link */}
            {/* Using the Debounced Indicator inside the Link */}
            <DebouncedIndicator />
          </Link>
        </li>

        <li>
          <Link href="/services" className={linkStyle("/services")}>
            Services
          </Link>
        </li>

        <li>
          <Link href="/blog" className={linkStyle("/blog")}>
            Blog
          </Link>
        </li>

        <li>
          <Link href="/file" className={linkStyle("/file")}>
            File
          </Link>
        </li>
        <li>
          <Link
            href="/serverDataFetching"
            className={linkStyle("/serverDataFetching")}
          >
            ServerDatafetching
          </Link>
        </li>
        <button
          className={clsx(
            "px-4 py-2 rounded-md transition duration-200",
            theme === "light"
              ? "bg-yellow-400 text-gray-800"
              : "bg-gray-800 text-yellow-400",
          )}
          onClick={toggleTheme}
        >
          {theme ? <FaSun /> : <FaMoon />}
        </button>
      </ul>
    </div>
  );
}

export default Header;
