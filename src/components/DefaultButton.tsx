'use client'

import { Variant } from "@/utils/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface HomeHeaderProps {
    href: string;
    title: string;
    className?: string;
    variant?: Variant;
}

export function DefaultButton({ href, title, className, variant }: HomeHeaderProps) {
    const router = useRouter();

    return (
        <div className="">
            <Button
                variant={variant ? variant : "outline"}
                className={className
                    ? className
                    : "bg-blue-600 px-5 text-white"}
                onClick={() => router.push(href)}
            >
                <span className="select-none">{title}</span>
            </Button>
        </div >
    )
}