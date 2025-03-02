// app/ClientLayout.tsx

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig, getCopyrightYears } from "@/config/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex space-x-8">
      {siteConfig.navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          target={item.target}
          rel={item.rel}
          className={`text-sm transition-colors hover:text-white ${
            pathname === item.path ? "text-white" : "text-white/70"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-zinc-900 text-white">
        <nav className="flex flex-col space-y-4 mt-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              target={item.target}
              rel={item.rel}
              className={`text-lg transition-colors hover:text-white ${
                pathname === item.path ? "text-white" : "text-white/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const displayYear = getCopyrightYears(siteConfig.startYear)

  return (
    <html lang="zh" className="dark">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white/90">
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold">
                  HomeLab
                </Link>
                <MainNav />
                <MobileNav />
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 pt-24 pb-16 flex-grow">{children}</main>
          <footer className="border-t border-white/5 py-6 bg-black/30 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-white/50">
              <p>
                {siteConfig.icp.enable ? (
                  <>
                    <a className="underline-hover" href={siteConfig.icp.url} target="_blank" rel="noreferrer">
                      {siteConfig.icp.name}
                    </a>{" "}
                  </>
                  ) : (
                    <>Copyright </>
                  )}
                &copy;{" "}
                <a className="underline-hover" href="/">
                  {siteConfig.author}
                </a>
                . {displayYear}
              </p>
              <div className="flex items-center justify-center gap-4 mt-2">
                <span>
                  Powered by{" "}
                  <a
                    className="underline-hover"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="external nofollow noreferrer noopener"
                  >
                    Next.js
                  </a>
                </span>
                <span>
                  Inspired by{" "}
                  <a
                    className="underline-hover"
                    href="https://v0.dev/"
                    target="_blank"
                    rel="external nofollow noreferrer noopener"
                  >
                    v0.dev
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
