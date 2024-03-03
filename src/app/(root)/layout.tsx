import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/providers/provider";
import { HomeHeader } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
