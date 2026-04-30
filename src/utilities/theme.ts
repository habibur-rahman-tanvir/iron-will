export function setTheme(theme: "light" | "dark"): void {
  localStorage.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const isThemeDark = (): boolean => localStorage.theme === "dark";
