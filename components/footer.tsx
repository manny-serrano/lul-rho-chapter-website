import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-gradient text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Lambda Upsilon Lambda Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-bold text-lul-gold">Rho Chapter</div>
                <div className="text-sm text-gray-300">Lambda Upsilon Lambda</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Lambda Upsilon Lambda Fraternity, Incorporated - Rho Chapter
              <br />
              Founded: 1982
              <br />
              La Unidad Latina
            </p>
            <p className="text-sm text-gray-400">Academic Excellence • Cultural Awareness • Community Service</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lul-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-white transition-colors">
                  Join Our Brotherhood
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-lul-gold hover:text-white transition-colors font-semibold">
                  Brother Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lul-gold">Connect With Us</h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                rho.chapter@lul.org
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lul-gold border-opacity-30 mt-8 pt-8 text-center">
          <p className="text-dark-secondary text-sm">
            © {new Date().getFullYear()} Lambda Upsilon Lambda Fraternity, Incorporated - Rho Chapter. All rights
            reserved.
          </p>
          <p className="text-dark-muted text-xs mt-2">
            Lambda Upsilon Lambda Fraternity, Incorporated was founded on February 19, 1982
          </p>
        </div>
      </div>
    </footer>
  )
}
