import { SignUpForm, Modal, ModeToggle } from "@/components"
import { LogoButton } from "@/components/LogoButton"

export default function Page() {
    return (
        <main className="bg-background">
            <div className="absolute ">
                <div className="flex p-4 w-screen justify-between">
                    <LogoButton href="/" />
                    <ModeToggle align="end" />
                </div>
            </div>
            <div className="flex w-screen h-screen justify-center items-center">
                <Modal>
                    <SignUpForm />
                </Modal>
            </div>
        </main>
    )
}