"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function EnhancedFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">YTL Cement Group</h3>
            <div>
              <p className="text-gray-300 mb-4">
                YTL Cement Group is Malaysia's pioneer and largest building materials group. With a network of cement
                plants, terminals, ready-mixed concrete batching facilities, drymix operations, and aggregate quarries,
                YTL Cement is recognised as a partner in nation building. Over its 70-year legacy, the Group has
                contributed to the construction of residential, commercial, and infrastructural projects throughout
                Malaysia, including the Petronas Twin Towers, Merdeka 118, SMART Tunnel, and the nation's iconic
                airports and bridges.
              </p>
              <p className="text-gray-300 mb-4">
                Extending its presence beyond domestic borders, YTL Cement now has operations in Southeast Asia, meeting
                the building material needs of neighbouring nations.
              </p>
              <p className="text-gray-300 mb-4">
                Recently, the Group launched its ECO Product Range, providing a diverse selection of low-carbon
                alternatives to conventional offerings. This eco-friendly range includes ECOCem™, a selection of
                low-carbon cements; ECOConcrete™, offering concrete with significantly reduced embodied carbon;
                ECOSand™, a perfect substitute for natural sand; and ECODrymix™, an eco-friendly pre-mix range. This
                initiative is part of its commitment to support the industry's transition to sustainable construction.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-sm">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-sm">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-sm">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Regional Presence</h3>
              <div className="space-y-2">
                <Link
                  href="https://ytlcement.com?region=malaysia#ourpresence"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Malaysia
                </Link>
                <Link
                  href="https://ytlcement.com?region=singapore#ourpresence"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Singapore
                </Link>
                <Link
                  href="https://ytlcement.com?region=vietnam#ourpresence"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Vietnam
                </Link>
                <Link
                  href="https://ytlcement.com?region=dubai#ourpresence"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Dubai
                </Link>
                <Link
                  href="https://ytlcement.com?region=finland#ourpresence"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Finland
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Careers at YTL Cement</h3>
              <div className="space-y-2">
                <Link
                  href="https://ytlcement.com"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Discover YTL Cement
                </Link>
                <Link
                  href="https://ytlcement.com/about-us"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="https://ytlcement.com/career"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Grow With Us
                </Link>
                <Link
                  href="https://ytlcement.com/meet-our-people"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Meet Our People
                </Link>
                <Link
                  href="https://ytlcement.com/contact-us"
                  target="_blank"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} YTL Cement Berhad [197701000339(31384-K)]. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
