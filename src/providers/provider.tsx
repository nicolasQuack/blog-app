import { ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider } from "./all-providers/theme-provider"

type ProvidersProps = {
    children: React.ReactNode;
    props: ThemeProviderProps;
}

export function Providers({ children, ...props }: ProvidersProps) {
    return (
        <ThemeProvider {...props}>
            {children}
        </ThemeProvider>
    )
}