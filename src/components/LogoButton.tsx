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
            whileHover={{ scale: 1.4, rotate: -15, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.8 }}
        >
            <Button variant={"link"} onClick={() => router.push(href)}>
                <Image src="/images/logo.svg" alt="logo" width="40" height="40" className="pointer-events-none" />
            </Button>
        </ motion.div >
    )
}