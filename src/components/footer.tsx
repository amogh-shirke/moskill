import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-md pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">MOSKILL NETTING</h3>
            <p className="text-gray-600 mb-4">
              Providing premium mosquito nets, grills, and blinds solutions since 2011. Protect your home with our
              high-quality products and expert installation services.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={18} />
              <p className="text-sm">Serving Maharashtra, Goa, and Gujarat</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#horizontal-mosquito-net"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Horizontal Mosquito Nets
                </Link>
              </li>
              <li>
                <Link
                  href="/services#vertical-mosquito-net"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Vertical Mosquito Nets
                </Link>
              </li>
              <li>
                <Link href="/services#bird-netting" className="text-gray-600 hover:text-primary transition-colors">
                  Bird Netting
                </Link>
              </li>
              <li>
                <Link href="/services#invisible-grills" className="text-gray-600 hover:text-primary transition-colors">
                  Invisible Grills (SS316)
                </Link>
              </li>
              <li>
                <Link
                  href="/services#velcro-mosquito-net"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Velcro Mosquito Nets
                </Link>
              </li>
              <li>
                <Link href="/services#roller-blinds" className="text-gray-600 hover:text-primary transition-colors">
                  Roller Blinds & Wallpapers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <p className="text-gray-600">9768872724 / 8898039392</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <p className="text-gray-600">moskillnetsol@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <p className="text-gray-600 text-sm">
                  Shop No. 13, Kharkar Compound, Near Chatrapati Shivaji Maharaj Hospital, Behind HP Gas Compound, Kalwa
                  (W) - 400 605.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MOSKILL NETTING SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

