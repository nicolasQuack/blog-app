import { Input } from "@/components/ui/input";
import { HeartIcon, ChatBubbleIcon, BookmarkIcon, Share1Icon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function Posts() {
    return (
        <div className="flex flex-col justify-center items-center h-[900px] select-none space-y-24">
            <div className="h-fit w-full  flex flex-col items-center justify-center space-y-2">
                <h2 className="text-4xl font-bold">Designed not to damage your vision.</h2>
                <p className="text-xl font-medium text-muted-foreground">Minimalist. Smarter. Complete.</p>
            </div>
            <div className="flex space-x-5 h-1/2 w-[900px]">
                <div className="size-full shadow w-1/2 rounded-lg bg-primary/10">
                    <div className="flex w-full h-full flex-col p-2 space-y-2">
                        <Input className="rounded-lg bg-background placeholder:text-muted-foreground/40" placeholder="Search for a topic" />
                        <h3 className="text-sm text-muted-foreground/40">Featured topics</h3>
                        <div className="w-full h-full bg-background rounded-lg p-2 overflow-scroll no-scrollbar flex flex-col space-y-2">
                            {Array(7).fill(0).map((_, i) => Card("w-full"))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-primary/10 shadow size-full p-3 rounded-lg justify-center">
                    <div className="w-full h-full flex justify-center items-center ">
                        <p className="text-sm text-muted-foreground/40">
                            Not yet.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

function Card(className: string) {
    return (
        <a href="/" className={className}>
            <div className="flex flex-col bg-muted h-[100px] w-full p-1 rounded-lg shadow">
                <h1 className="font-medium">Getting started</h1>
                <p className="font-light text-[10px] h-full">Here you can see how the application flow works. We can publish and share ideas and discuss them.</p>
                <div className="w-full h-fit flex items-end">
                    <p className="text-[6px] w-full text-muted-foreground/40">
                        Created by Nicolas Florencio Felipe at 08/03/2024.
                    </p>
                    <div className="text-muted-foreground/50 flex h-full w- justify-end items-center">
                        <HeartIcon height={8} />
                        <ChatBubbleIcon height={8} />
                        <BookmarkIcon height={8} />
                        <Share1Icon height={8} />
                        <ExclamationTriangleIcon height={8} />
                    </div>
                </div>
            </div>
        </a>
    )
}