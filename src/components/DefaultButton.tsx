'use client'

import { Variant } from "@/utils/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface HomeHeaderProps {
    href: string;
    title: string;
    id?: string;
    className?: string;
    variant?: Variant;
}

export function DefaultButton({ href, title, className, variant, id }: HomeHeaderProps) {
    const router = useRouter();

    return (
        <div id={id} className="">
            <Button
                variant={variant ? variant : "outline"}
                className={className ? className : "bg-blue-600 px-5 text-white"}
                onClick={() => router.push(href)}
            >
                <span className="select-none">{title}</span>
            </Button>
        </div >
    )
}