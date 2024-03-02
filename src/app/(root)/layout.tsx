import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/providers/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <Providers props={{
          enableSystem: true,
          defaultTheme: "system",
          attribute: "class",
        }}>
          {children}
        </Providers>
      </body>
    </html >
  );
}
