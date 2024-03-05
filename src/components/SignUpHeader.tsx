'use client'

import { DefaultButton, LogoButton, ModeToggle } from ".";

export function SignUpHeader() {
    return (
        <div className="fixed">
            <div className="flex py-4 px-12 w-screen justify-between">
                <LogoButton href="/" />
                <div className="flex space-x-4">
                    <DefaultButton href="/login" title="Log In" />
                    <ModeToggle align="end" />
                </div>
            </div>
        </div>
    )
}