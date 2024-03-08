import Image from "next/image";

export function Idea() {
    return (
        <div className="h-[3328px]">
            <div className="h-full w-full flex justify-center ">
                <div className=" h-full w-[1512px]">
                    <div className="flex flex-col justify-center items-center h-full w-full select-none">
                        <div className="h-fit w-full  flex flex-col items-center justify-center space-y-2">
                            <h2 className="text-4xl font-bold">New era of social media.</h2>
                            <p className="text-xl font-medium text-muted-foreground">A single app for everything you need.</p>
                        </div>
                        <div className="h-[600px] w-full px-24 space-x-12 flex ">
                            <div className=" h-full w-full flex justify-end items-center">
                                <div className="h-[300px] w-[450px] rotate-6 rounded-lg bg-gradient-to-br from-sky-300 to-yellow-200 shadow">
                                    <div className="h-[300px] w-[450px] shadow rounded-lg -rotate-6 overflow-clip">
                                        <Image className="pointer-events-none" src={"/images/examples/image1.png"} alt="" fill />
                                    </div>
                                </div>
                            </div>
                            <div className=" h-full w-full flex justify-start items-center">
                                <div className="w-[450px] h-[450px] flex flex-col justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold">Work, study and have fun.</h3>
                                    <p className="text-xl font-normal">A freedom environment speciality to you. Explore communities, create your own, work together your team, practice your studies and be a neo blogger.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[600px] w-full px-24 space-x-12 flex ">
                            <div className=" h-full w-full flex justify-end items-center">
                                <div className="w-[450px] h-[450px] flex flex-col items-end justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold">Privacy and secure.</h3>
                                    <p className="text-xl font-normal text-end">Just relax and drive on this new safe technology route, here your data is fully secured by our <span className="text-green-500 underline underline-offset-4">privacy policy</span>.</p>
                                </div>
                            </div>
                            <div className=" h-full w-full flex justify-start items-center">
                                <div className="h-fit">
                                    <div className="h-[300px] w-[450px] -rotate-6 rounded-lg bg-gradient-to-br from-sky-300 to-yellow-200 shadow">
                                        <div className="h-[300px] w-[450px] shadow rounded-lg rotate-6 overflow-clip">
                                            <Image className="pointer-events-none" src={"/images/examples/image2.png"} alt="" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[600px] w-full px-24 space-x-12 flex ">
                            <div className=" h-full w-full flex justify-end items-center">
                                <div className="h-fit">
                                    <div className="h-[300px] w-[450px] rotate-6 rounded-lg bg-gradient-to-br from-sky-300 to-yellow-200 shadow">
                                        <div className="h-[300px] w-[450px] shadow rounded-lg -rotate-6 overflow-clip">
                                            <Image className="pointer-events-none" src={"/images/examples/image3.png"} alt="" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-full w-full flex justify-start items-center">
                                <div className="w-[450px] h-[450px] flex flex-col justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold">Ultimate fast application.</h3>
                                    <p className="text-xl font-normal">Neo blog was developed with Rust lang, that surprises us with secure types and fast talk with machine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[600px] w-full px-24 space-x-12 flex ">
                            <div className=" h-full w-full flex justify-end items-center">
                                <div className="w-[450px] h-[450px] flex flex-col items-end justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold">Connected spaces.</h3>
                                    <p className="text-xl font-normal text-end">Connect quickly and securely in your different environments: car, smart watch, phone, desktop, tablet, television and so on.</p>
                                </div>
                            </div>
                            <div className=" h-full w-full flex justify-start items-center">
                                <div className="h-fit">
                                    <div className="h-[300px] w-[450px] -rotate-6 rounded-lg bg-gradient-to-br from-sky-300 to-yellow-200 shadow">
                                        <div className="h-[300px] w-[450px] shadow rounded-lg rotate-6 overflow-clip">
                                            <Image className="pointer-events-none" src={"/images/examples/image4.png"} alt="" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[600px] w-full px-24 space-x-12 flex ">
                            <div className=" h-full w-full flex justify-end items-center">
                                <div className="h-fit">
                                    <div className="h-[300px] w-[450px] rotate-6 rounded-lg bg-gradient-to-br from-sky-300 to-yellow-200 shadow">
                                        <div className="h-[300px] w-[450px] shadow rounded-lg -rotate-6 overflow-clip">
                                            <Image className="pointer-events-none" src={"/images/examples/image5.png"} alt="" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-full w-full flex justify-start items-center">
                                <div className="w-[450px] h-[450px] flex flex-col justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold">For a good reason.</h3>
                                    <p className="text-xl font-normal">We work with hundreds of non-profit institutions and sponsor thousands of causes for a greener world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}