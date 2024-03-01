import "@/styles/globals.css";
import { inter } from "@/styles/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`} >
        {children}
      </body>
    </html >
  );
}
