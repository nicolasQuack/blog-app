'use client'

import { DefaultButton, LogoButton, ModeToggle, NavMenu } from "@/components";
import * as React from "react";

export function HomeHeader() {

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('div#scroll-down-hidden')
            if (header) {
                if (window.scrollY > 0) {
                    header.classList.add('animate-hidden-up')
                    header.classList.remove('animate-hidden-up-show')
                }
                else {
                    header.classList.add('animate-hidden-up-show')
                    header.classList.remove('animate-hidden-up')
                }
            }
        })
    }

    return (
        <header className="absolute max-h-full py-4 px-12 items-center w-screen justify-between">
            <div className="flex justify-center items-start">
                <div className="fixed ">
                    <div className="flex col-span-2 items-center justify-center">
                        <NavMenu />
                    </div>
                </div>
            </div>
            <div id="scroll-down-hidden" className="grid grid-cols-2 ">
                <div className="flex">
                    <LogoButton href="/" />
                </div>
                <div className="flex justify-end space-x-4">
                    <DefaultButton href="/signup" title="Sign Up" />
                    <ModeToggle align="end" />
                </div>
            </div>
        </header >
    )
}