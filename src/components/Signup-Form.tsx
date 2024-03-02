import Link from "next/link";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function SignUpForm() {
    return (
        <div className="mx-auto max-w-sm space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Enter your information to create an account
                </p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="mail@example.com"
                    required
                    type="email"
                />
            </div>
            <div className="space-y-4">
                <Button className="w-full">Send Magic Link</Button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Or sign up with
                </p>
                <div className="flex justify-center">
                    <Button variant="outline" className="w-1/2 dark:hover:bg-green-600 hover:bg-green-600 hover:text-white space-x-1">
                        <GitHubLogoIcon />
                        <span>GitHub</span>
                    </Button>
                </div>
            </div>
            <div className="mt-4 text-center text-sm">
                Already have an account?
                <Link className="underline pl-1 hover:text-green-600" href="#">
                    <span>Login</span>
                </Link>
            </div>
        </div>
    );
}
