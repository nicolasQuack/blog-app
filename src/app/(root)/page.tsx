import { HomeHeader } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="absolute">
        <HomeHeader />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex space-x-6  justify-center select-none pointer-events-none">
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
      </div>
    </main>
  );
}
