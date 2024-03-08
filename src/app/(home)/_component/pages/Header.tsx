'use client'

import { DefaultButton, LogoButton, ModeToggle, NavMenu } from "@/components";

export function Header() {

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', () => {
            const navBar = document.getElementById('nav-bar')
            const right = document.getElementById('right')
            const logo = document.getElementById('logo')

            if (navBar && right && logo) {
                if (window.scrollY > 0) {
                    right.classList.add('animate-hidden-up')
                    right.classList.remove('animate-hidden-up-show')
                    logo.classList.add('animate-hidden-up')
                    logo.classList.remove('animate-hidden-up-show')
                    navBar.classList.add('animate-nav-menu-end')
                    navBar.classList.remove('animate-nav-menu-start')
                }
                else {
                    right.classList.add('animate-hidden-up-show')
                    right.classList.remove('animate-hidden-up')
                    logo.classList.add('animate-hidden-up-show')
                    logo.classList.remove('animate-hidden-up')
                    navBar.classList.remove('animate-nav-menu-end')
                    navBar.classList.add('animate-nav-menu-start')
                    navBar.classList.remove('grid-cols-4-test')

                }
            }

        })

        window.addEventListener('resize', () => {
            const navBar = document.getElementById('nav-bar')
            const right = document.getElementById('right')
            const signUpButton = document.getElementById('signup-button')

            if (navBar && right && signUpButton) {
                if (window.innerWidth < 1110) {
                    navBar.classList.add('hidden')
                    right.classList.add('grid-cols-3')
                    signUpButton.classList.add('hidden')

                } else {
                    navBar.classList.remove('hidden')
                    right.classList.remove('grid-cols-3')
                    signUpButton.classList.remove('hidden')
                }
            }
        })

    }

    return (
        <header className="py-4 px-12">
            <div className="grid grid-flow-row grid-cols-4">
                <div id="logo" className="flex">
                    <LogoButton href="/" />
                </div>
                <div id="nav-bar" className="portrait:hidden sm:col-span-2 flex justify-center">
                    <NavMenu />
                </div>
                <div id="right" className="flex space-x-4 justify-end">
                    <DefaultButton id="signup-button" className="portrait:hidden bg-blue-600 text-white" href="/signup" title="Sign Up" />
                    <div className="flex">
                        <ModeToggle align="end" />
                    </div>
                </div>
            </div>
        </header>
    )
}