"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function ThemedCharacter() {
    const { theme, systemTheme } = useTheme();

    if (theme === "dark") return <DarkCharacter />;
    else if (theme === "light") return <LightCharacter />;
    else if (systemTheme === "dark") return <DarkCharacter />;
    else return <LightCharacter />;
}

export function LightCharacter() {
    return (
        <div suppressHydrationWarning>
            <Image
                quality={100}
                priority
                src={`/images/character/light.png`}
                width={300}
                height={300}
                alt="light character of not found"
            />
        </div>
    );
}

export function DarkCharacter() {
    return (
        <Image
            quality={100}
            priority
            src={`/images/character/dark.png`}
            width={300}
            height={300}
            alt="dark character of not found"
        />
    );
}
