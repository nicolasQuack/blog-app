export function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-transparent p-8 rounded-2xl shadow-2xl space-y-4">
            {children}
        </div>
    )
}