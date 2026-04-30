"use client";
import { createContext, useContext, useMemo, useState } from "react";
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// create the context with the default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// step2: create provide component

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // this value will be accessible to all children
  // const value = {
  //   theme,
  //   toggleTheme,
  // };
  // this is the bad as it create a new object on every re render
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

//step3 : create custom hook for easy cnsumption

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
