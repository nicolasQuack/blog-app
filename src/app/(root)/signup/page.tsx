import { SignUpForm, Modal, ModeToggle } from "@/components"

export default function Page() {
    return (
        <main className="">
            <div className="absolute">
                <div className="flex p-4 w-screen justify-end">
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