"use client";

import { useTheme } from "./context/ThemedContext";

function Nomi() {
  const { theme } = useTheme();
  console.log("nomi", theme);

  return <div>Nomi</div>;
}

export default Nomi;
