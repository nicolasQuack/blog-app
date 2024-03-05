"use client";

import Image from "next/image";
import DarkCharacter from "../../../public/images/character/dark.svg";
import LightCharacter from "../../../public/images/character/light.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemedCharacter() {
    const { theme, systemTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {

        if (theme === "system") {
            if (systemTheme === "light") setCurrentTheme("light");

            else setCurrentTheme("dark");

        } else {
            setCurrentTheme(theme);
        }

    }, [theme, systemTheme]);

    return Character(currentTheme!);

}

export function Character(theme: string) {
    return (
        <div>
            <Image
                quality={100}
                priority
                src={theme === "light" ? LightCharacter : DarkCharacter}
                className="h-auto w-80"
                width={0}
                height={0}
                alt="character of not found"
            />
        </div>
    );
}