import { AuthForm, Modal, ModeToggle } from "@/components"

export default function Page() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div className="">
                <div className="space-y-16">
                    <Modal>
                        <div className="w-full flex justify-end">
                            <ModeToggle />
                        </div>
                        <AuthForm />
                    </Modal>
                </div>
            </div>
        </main>
    )
}