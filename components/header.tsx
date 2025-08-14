"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import SearchOverlay from "@/components/search/search-overlay"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useAuth } from "@/hooks/use-auth"

const navItems = [
  {
    name: "Sustainability",
    href: "/sustainability",
  },
  {
    name: "Products & Solutions",
    href: "/products-solutions",
  },
  {
    name: "Media Hub",
    href: "/media-hub",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Investor",
    href: "#",
    dropdown: [
      { name: "YTL Cement Berhad", href: "/investor/ytl-cement-berhad" },
      { name: "MCB", href: "#" },
      { name: "NSL Ltd", href: "#" },
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const { authState, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen)
  }

  const handleLogout = () => {
    logout()
    setIsUserDropdownOpen(false)
    window.location.href = "/"
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 shadow-md",
          isScrolled ? "bg-white shadow-md py-4" : "bg-white py-4",
        )}
      >
        <div className="h-full container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div>
                <Image
                  src="https://cdn.ytlcement.com/ytl-production-media/ytl-media/assets/B70_logo_dc2cc2aa59.svg"
                  alt="YTL Cement Logo"
                  width={240}
                  height={120}
                  className="mr-6"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-base font-medium transition-colors duration-300 text-text-color hover:text-primary"
            >
              Jobs
            </Link>

            {/* Show user dropdown only if authenticated */}
            {authState.isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="text-base font-medium transition-colors duration-300 text-text-color hover:text-primary flex items-center gap-1"
                >
                  Hi, {authState.user?.name || "User"}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {isUserDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    >
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-text-color text-base hover:bg-gray-100 hover:text-primary"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/change-password"
                          className="block px-4 py-2 text-text-color text-base hover:bg-gray-100 hover:text-primary"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          Change Password
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-base text-text-color hover:bg-gray-100 hover:text-primary"
                          onClick={handleLogout}
                        >
                          Log Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : null}

            {/* Show Drop Your CV only if not authenticated */}
            {!authState.isAuthenticated && (
              <Link
                href="/careers/apply"
                className="text-base font-medium transition-colors duration-300 text-text-color hover:text-primary"
              >
                Drop Your CV
              </Link>
            )}

            {/* Show Login only if not authenticated */}
            {!authState.isAuthenticated && (
              <Link
                href="/login"
                className="text-base font-medium transition-colors duration-300 text-text-color hover:text-primary"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden transition-colors duration-300 text-text-color hover:text-primary hover:bg-transparent"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="block py-2 font-medium text-text-color hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jobs
                  </Link>

                  {/* Show user options only if authenticated */}
                  {authState.isAuthenticated ? (
                    <>
                      <Link
                        href="/profile"
                        className={cn(
                          "flex items-center gap-2 py-2 font-medium",
                          pathname === "/profile" ? "text-primary" : "text-text-color hover:text-primary",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/change-password"
                        className="block py-2 font-medium text-text-color hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Change Password
                      </Link>
                      <button
                        className="block w-full text-left py-2 font-medium text-text-color hover:text-primary"
                        onClick={() => {
                          handleLogout()
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Show Drop Your CV before Login */}
                      <Link
                        href="/careers/apply"
                        className="block py-2 font-medium text-text-color hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Drop Your CV
                      </Link>
                      <Link
                        href="/login"
                        className="block py-2 font-medium text-text-color hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>{isSearchOpen && <SearchOverlay onClose={toggleSearch} />}</AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}
