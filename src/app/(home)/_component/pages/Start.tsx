import { DefaultButton } from "@/components";
import Image from "next/image";

export function Start() {
    return (
        <div className="flex flex-col justify-center items-center border h-[900px] select-none">
            <div className="flex space-x-5 h-1/2 lg:w-[900px]">
                <div className="size-full">
                    <Image className="pointer-events-none" src="/images/template.svg" alt="logo template" width={500} height={500} />
                </div>
                <div className="flex flex-col space-y-8 size-full justify-center">
                    <div>
                        <h1 className="text-6xl font-bold">Think, Write
                            and Share.</h1>
                    </div>
                    <div className="text-lg font-normal">
                        <div>
                            <p>A web blog developed and designed to give you an
                                enjoyable browsing experience.</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">by Nicolas Florencio Felipe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] w-[900px]">
                <div className="flex justify-center items-center w-full h-full">
                    <DefaultButton href="/signup" title="Learn More About Project" className="py-7 px-14 text-white bg-blue-500" variant={"outline"} />
                </div>
            </div>
        </div>
    )
}