import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import Header from "@/components/header"
import EnhancedFooter from "@/components/enhanced-footer"

export const metadata: Metadata = {
  title: "YTL Cement Careers",
  description: "Join our team at YTL Cement and build your career with a leader in the construction industry",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-titillium bg-white text-text-color">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <Header />
            {children}
            <EnhancedFooter />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
