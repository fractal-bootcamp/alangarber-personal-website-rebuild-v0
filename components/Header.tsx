"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about-me" },
  { name: "Portfolio", href: "#works" },
  { name: "GitHub", href: "https://github.com/OldEphraim", external: true },
  { name: "Blog", href: "https://oldephraimlearnstocode.wordpress.com", external: true },
  { name: "Resume", href: "https://alanmgarber.com/Resume", external: true },
  { name: "Contact", href: "#contact-form" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = targetId ? document.getElementById(targetId) : document.body

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="header-logo">
          <h1 className="text-2xl font-bold">Alan</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--primary-color)] transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                    onClick={(e) => handleInternalLinkClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-[var(--primary-color)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="block hover:text-[var(--primary-color)] transition-colors cursor-pointer"
                    onClick={(e) => handleInternalLinkClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

