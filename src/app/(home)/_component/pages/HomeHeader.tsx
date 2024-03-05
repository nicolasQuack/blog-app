'use client'

import { DefaultButton, LogoButton, ModeToggle, NavMenu } from "@/components";
import * as React from "react";

export function HomeHeader() {

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            const right = document.getElementById('right-scroll-down')
            const left = document.getElementById('left-scroll-down')
            const center = document.getElementById('center-scroll-down')

            if (right && left && center) {
                if (window.scrollY > 0) {
                    right.classList.add('animate-hidden-up')
                    right.classList.remove('animate-hidden-up-show')
                    left.classList.add('animate-hidden-up')
                    left.classList.remove('animate-hidden-up-show')
                    center.classList.add('animate-nav-menu-end')
                    center.classList.remove('animate-nav-menu-start')
                }
                else {
                    right.classList.add('animate-hidden-up-show')
                    right.classList.remove('animate-hidden-up')
                    left.classList.add('animate-hidden-up-show')
                    left.classList.remove('animate-hidden-up')
                    center.classList.remove('animate-nav-menu-end')
                    center.classList.add('animate-nav-menu-start')

                }
            }
        })
    }

    return (
        <header className="absolute max-h-full py-4 px-12 items-center w-screen select-none justify-between">
            <div className="grid grid-cols-4">
                <div id="right-scroll-down" className="flex">
                    <LogoButton href="/" />
                </div>
                <div className="flex col-span-2 justify-center items-star z-10">
                    <div id="center-scroll-down">
                        <div className="flex items-center justify-center">
                            <NavMenu />
                        </div>
                    </div>
                </div>
                <div id="left-scroll-down" className="flex justify-end space-x-4">
                    <DefaultButton href="/signup" title="Sign Up" />
                    <ModeToggle align="end" />
                </div>
            </div>
        </header >
    )
}