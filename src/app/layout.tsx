import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./scss/style.scss";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "toLocaleString Generate",
    description: "Uma ferramenta para facilitar a conversão de valores em strings localizadas, utilizando o método toLocaleString() do JavaScript. Ideal para formatação de números, datas e moedas conforme diferentes padrões de localidade.",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
                {children}
            </body>
        </html>
    );
}
