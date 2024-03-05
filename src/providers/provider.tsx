import { ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider } from "./all-providers/theme-provider"

type ProvidersProps = {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider >
            {children}
        </ThemeProvider>
    )
}