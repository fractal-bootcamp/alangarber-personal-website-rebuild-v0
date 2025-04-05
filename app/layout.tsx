import type React from "react"
import type { Metadata } from "next"
import { Inter, Fanwood_Text, EB_Garamond, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fanwood = Fanwood_Text({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fanwood",
})
const garamond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-garamond",
})
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Alan Garber Portfolio",
  description: "Portfolio website for Alan Garber, Fullstack Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${fanwood.variable} ${garamond.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

