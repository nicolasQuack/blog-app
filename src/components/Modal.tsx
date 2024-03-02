export function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="p-8 py-16 rounded-2xl space-y-4 border shadow-2xl dark:shadow-zinc-700">
            {children}
        </div>
    )
}