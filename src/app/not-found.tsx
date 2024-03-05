
import { DefaultButton, ModeToggle } from "@/components";
import { ThemedCharacter } from "@/utils/images";

export default function Page() {

    return (
        <div className="flex h-screen justify-center items-center">
            <div className=" flex flex-col space-y-4 justify-center items-center">
                <div className="h-full flex flex-col items-center select-none pointer-events-none space-y-2">
                    <div className="h-auto border-b shadow-sm">
                        <ThemedCharacter />
                    </div>
                    <h1 className="text-2xl font-bold">Page not found</h1>
                    <p className="text-stone-500">we are probably working on it!</p>
                </div>
                <div className="flex items-center justify-center space-x-6">
                    <DefaultButton href="/" variant="destructive" title="Back to menu" />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}