'use client'

import { DefaultButton } from "@/components";
import Image from "next/image";

export function MainContent() {
    return (
        <>
            <div className="flex space-x-12  justify-center select-none pointer-events-none">
                <Image
                    src={"/images/template.svg"}
                    width={450}
                    height={450}
                    alt="template"
                    className=""
                />
                <div className="flex flex-col justify-center w-[450px] space-y-8">
                    <h1 className="text-7xl font-bold">
                        Think, Write and Share.
                    </h1>
                    <p className="text-lg font-normal">A web blog developed and designed to give you an enjoyable browsing experience.
                        by Nicolas Florencio Felipe.</p>
                </div>
            </div>
            <div>
                <DefaultButton href="/signup" title="Get your free account here" className="py-7 px-14 text-white bg-blue-500" variant={"outline"} />
            </div>
        </>
    )
}