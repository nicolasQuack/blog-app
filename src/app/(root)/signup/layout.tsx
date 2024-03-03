import { DefaultButton, HomeHeader, Modal, ModeToggle } from "@/components";
import { LogoButton } from "@/components/LogoButton";
import { SignUpHeader } from "@/components/SignUpHeader";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up",
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <div className="absolute">
                <SignUpHeader />
            </div>
            <div className="flex w-screen h-screen justify-center items-center">
                <Modal>
                    {children}
                </Modal>
            </div>
        </main>
    )
}