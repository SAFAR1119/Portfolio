"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (

        <button

            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }

            className="
            theme-toggle rounded-full border p-2 transition hover:scale-110
            "

        >

            {

                theme === "dark"

                    ? <Sun size={18} />

                    : <Moon size={18} />

            }

        </button>

    );

}
