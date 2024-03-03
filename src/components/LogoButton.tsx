'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface LogoButtonProps {
    href: string;
}

export function LogoButton({ href }: LogoButtonProps) {
    const router = useRouter();

    return (
        <motion.div
            whileHover={{ scale: 1.4, rotate: -15, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.8, rotate: 15, transition: { duration: 0.3 } }}
            className="flex"
        >
            <Button size={"icon"} variant={"link"} onClick={() => router.push(href)}>
                <Image priority src="/images/logo.svg" alt="logo" width="36" height="36" className="pointer-events-none" />
            </Button>
        </ motion.div >
    )
}