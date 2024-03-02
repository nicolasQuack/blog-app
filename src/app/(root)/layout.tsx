import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/providers/provider";
import { ThemeProvider } from "@/providers/all-providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} >
        <Providers props={{
          attribute: "class",
          defaultTheme: "system",
          enableSystem: true,
          themes: ["light", "dark"],
        }}
        >
          {children}
        </Providers>
      </body>
    </html >
  );
}
