import Link from "next/link"

import {
    Label
} from "@/components/ui/label";

import {
    Input
} from "@/components/ui/input";

import {
    Button
} from "@/components/ui/button";

export function AuthForm() {
    return (
        <div className="mx-auto max-w-sm space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="newchat@example.com" required type="email" />
            </div>
            <Button className="w-full">Send Magic Link</Button>
            <div className="mt-4 text-center text-sm">
                Already have an account?
                <Link className="underline" href="#">
                    Login
                </Link>
            </div>
        </div>
    )
}

