"use client";

import Image from "next/image";
import DarkCharacter from "../../../public/images/character/dark.svg";
import LightCharacter from "../../../public/images/character/light.svg";
import { useTheme } from "next-themes";

export function ThemedCharacter() {
    const { theme, resolvedTheme } = useTheme();

    return <Image
        quality={100}
        priority
        src={theme === "system" ? (resolvedTheme === "dark" ? DarkCharacter : LightCharacter) : (theme === "dark" ? DarkCharacter : LightCharacter)}
        className="h-auto w-80"
        width={0}
        height={0}
        alt="character of not found"
    />
}