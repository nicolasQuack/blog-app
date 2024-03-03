import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/providers/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: 'NewBlog | %s',
    default: 'NewBlog'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={`${inter.className} bg-background `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
