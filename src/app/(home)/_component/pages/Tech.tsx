import { Input } from "@/components/ui/input";
import { HeartIcon, ChatBubbleIcon, BookmarkIcon, Share1Icon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function Tech() {
    return (
        <div className="flex flex-col justify-center items-center h-[900px] select-none space-y-24">
            <div className="h-fit w-full  flex flex-col items-center justify-center space-y-2">
                <h2 className="text-4xl font-bold">Developed with the latest technologies.</h2>
                <p className="text-xl font-medium text-muted-foreground">Speed. Safety. Suitable.</p>
            </div>
            <div className="grid hover:grid-cols-6 grid-cols-5 gap-1 grid-flow-col h-1/2 w-[900px] rounded-xl overflow-clip">
                {Array(5).fill(0).map((_, i) => {
                    return <div key={i} className="h-full w-full hover:col-span-2  bg-secondary">

                    </div>
                })}
            </div>
        </div >
    )
}