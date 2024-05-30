'use client';
import { useEffect, useState } from 'react';
export const UseThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");
        const handleChange = () => {
            const userTheme = userPref || (mediaQuery.matches ? "dark" : "light");
            setMode(userTheme);
            document.documentElement.classList.toggle("dark", userTheme === "dark");
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    useEffect(() => {
        window.localStorage.setItem("theme", mode);
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);
    return [mode, setMode];
};
