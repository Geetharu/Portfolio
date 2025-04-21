import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../app/globals.css"
import ThemeToggle from "../../components/ThemeToggle"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Geeth Wickramasinghe - Portfolio",
  description: "Aspiring Software Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ThemeToggle /> {/*  Dark Mode Button */}
      </body>
    </html>
  )
}
