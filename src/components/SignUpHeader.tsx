'use client'

import { DefaultButton, LogoButton, ModeToggle } from ".";

export function SignUpHeader() {
    return (
        <div className="flex p-4 w-screen justify-between">
            <LogoButton href="/" />
            <div className="flex space-x-4">
                <DefaultButton href="/login" title="Log In" />
                <ModeToggle align="end" />
            </div>
        </div>
    )
}