'use client'

import { DefaultButton, Modal } from "."
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

interface NavigationMenuProps {
    title: string,
    href: string,
    items: { title: string, description: string }[],
}

const props: NavigationMenuProps[] = [
    {
        title: "Start",
        href: "/",
        items: [
            {
                title: "Posts",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Idea",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Tech",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Creator",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "End",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
    {
        title: "Idea",
        href: "/about",
        items: [
            {
                title: "About",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Contact",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Terms",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Privacy",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
    {
        title: "Posts",
        href: "/account",
        items: [
            {
                title: "Login",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Signup",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Recover",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Delete",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
    {
        title: "Tech",
        href: "/social",
        items: [
            {
                title: "Twitter",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Facebook",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Instagram",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Reddit",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
    {
        title: "Creators",
        href: "/more",
        items: [
            {
                title: "FAQ",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Help",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Support",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Feedback",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
    {
        title: "End",
        href: "/legal",
        items: [
            {
                title: "Terms",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Privacy",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Cookies",
                description: "lorem ipsum dolor sit amet"
            },
            {
                title: "Policy",
                description: "lorem ipsum dolor sit amet"
            },
        ]
    },
]


export function NavMenu() {
    return (
        <div className="h-full relative flex items-top" >
            <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                    {props.map((component) => (
                        <NavigationMenuItem key={component.title}>
                            <NavigationMenuTrigger className="shadow shadow-input">
                                {component.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <div className="grid grid-cols-2 gap-3 p-4 w-[544px] lg:grid-cols-[.75fr_1fr]">
                                    <div className="col-span-1 w-full h-full">
                                        <Modal className="w-full h-full" shadow="shadow-none" rounded="rounded-md" padding=" ">
                                            <div className="p-2 flex flex-col h-full justify-end items-start">
                                                <span className="pt-20 font-medium text-lg">
                                                    Getting start
                                                </span>
                                                <span className="font-light text-clip text-sm">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, explicabo, dicta perferendis nulla blanditiis ipsam autem corporis!
                                                </span>
                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="grid grid-row-3 gap-3 w-full h-full ">
                                        <DefaultButton className="w-full h-full" href="#post" title={component.title} />
                                        <DefaultButton className="w-full h-full" href="#" title={component.title} />
                                        <DefaultButton className="w-full h-full" href="#" title={component.title} />
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div >
    )
}