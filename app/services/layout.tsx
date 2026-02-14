import React from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="text-red-500"> Servivec Layout</h1>
      {children}
    </section>
  );
}
