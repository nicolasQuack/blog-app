import { DefaultButton, HomeHeader } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MainContent } from "./_component/Content";

export default function Home() {
  return (
    <main>
      <div className="absolute">
        <HomeHeader />
      </div>
      <div className="h-screen flex flex-col justify-center items-center space-y-12">
        <MainContent />
      </div>
    </main>
  );
}
