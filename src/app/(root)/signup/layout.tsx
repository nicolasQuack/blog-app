import { Modal, ModeToggle } from "@/components";
import { LogoButton } from "@/components/LogoButton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up",
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <div className="absolute ">
                <div className="flex p-4 w-screen justify-between">
                    <LogoButton href="/" />
                    <ModeToggle align="end" />
                </div>
            </div>
            <div className="flex w-screen h-screen justify-center items-center">
                <Modal>
                    {children}
                </Modal>
            </div>
        </main>
    )
}