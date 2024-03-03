'use client'

import { ModeToggle } from "."
import { LogoButton } from "./LogoButton"
import { DefaultButton } from "./DefaultButton"

export function HomeHeader() {
    return (
        <header>
            <div className="grid grid-cols-4 p-4 h-auto w-screen justify-between">
                <div className="flex">
                    <LogoButton href="/" />
                </div>

                <div className="flex col-span-2 p-4 items-center justify-center">

                </div>
                <div className="flex justify-end space-x-4">
                    <DefaultButton href="/signup" title="Sign Up" />
                    <ModeToggle />
                </div>
            </div>
        </header >
    )
}