import { Rounded, Shadows } from "../utils/types/style"

interface ModalProps {
    children: React.ReactNode
    shadow?: Shadows
    padding?: string
    rounded?: Rounded
    className?: string
}

export function Modal({ children, shadow, padding, rounded, className }: Readonly<ModalProps>) {
    return (
        <div className={`${className} ${shadow ? shadow : "shadow-2xl"} ${padding ? padding : "p-8 py-16"} ${rounded ? rounded : "rounded-xl"} space-y-4 border dark:shadow-zinc-700`}>
            {children}
        </div>
    )
}