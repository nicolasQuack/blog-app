'use client'

import { DefaultButton } from "."
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

const links: { title: string, href: string, description: string }[] = [
    {
        title: "Start",
        href: "/",
        description: "Home Page"
    },
    {
        title: "Posts",
        href: "/",
        description: "lorem ipsum dolor sit amet"
    },
    {
        title: "Idea",
        href: "/",
        description: "Home Page"
    },
    {
        title: "Tech",
        href: "/",
        description: "Home Page"
    },
    {
        title: "Creator",
        href: "/",
        description: "Home Page"
    },
    {
        title: "End",
        href: "/signup",
        description: "Home Page"
    },
]

export function NavMenu() {
    return (
        <div className="h-full relative flex items-top">
            <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                    {links.map((component) => (
                        <NavigationMenuItem key={component.title}>
                            <NavigationMenuTrigger className="shadow dark:shadow-primary-foreground">
                                {component.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[536px] lg:grid-cols-[.75fr_1fr]">
                                    <DefaultButton href={component.href} title={component.description} />
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div >
    )
}