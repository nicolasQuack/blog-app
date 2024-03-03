import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function SignupButton() {
    const router = useRouter();

    return (
        <div className="">
            <Button
                variant={"outline"}
                className="bg-blue-600 text-white"
                onClick={() => router.push("/signup")}
            >
                Sign Up
            </Button>
        </div >
    )
}