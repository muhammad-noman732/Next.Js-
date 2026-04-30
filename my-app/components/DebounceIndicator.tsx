"use client";
import { useLinkStatus } from "next/link";

export default function DebouncedIndicator() {
  const { pending } = useLinkStatus();

  return (
    <span
      className="ml-2 text-sm text-yellow-300 pointer-events-none"
      style={{
        // 1. Invisible when not pending, fully visible when pending
        opacity: pending ? 1 : 0,

        // 2. Smoothly animate the opacity change over 200ms
        transition: "opacity 0.2s ease-in-out",

        // 3. THE MAGIC DEBOUNCE:
        // Wait 200ms before fading in.
        // Snap back to 0ms (instant fade out) when navigation finishes.
        transitionDelay: pending ? "200ms" : "0ms",
      }}
    >
      ⏳ Thinking...
    </span>
  );
}
