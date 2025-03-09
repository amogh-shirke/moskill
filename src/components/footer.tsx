import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 pt-16 pb-8 bg-white/90 backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-gradient">MOSKILL NETTING</h3>
            <p className="mb-4 text-gray-600">
              Providing premium mosquito nets, grills, and blinds solutions since 2011. Protect your home with our
              high-quality products and expert installation services.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={18} />
              <p className="text-sm">Serving Maharashtra, Goa, and Gujarat</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 transition-colors hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 transition-colors hover:text-primary">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-600 transition-colors hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-600 transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#horizontal-mosquito-net" className="text-gray-600 transition-colors hover:text-primary">Horizontal Mosquito Nets</Link></li>
              <li><Link href="/services#vertical-mosquito-net" className="text-gray-600 transition-colors hover:text-primary">Vertical Mosquito Nets</Link></li>
              <li><Link href="/services#bird-netting" className="text-gray-600 transition-colors hover:text-primary">Bird Netting</Link></li>
              <li><Link href="/services#invisible-grills" className="text-gray-600 transition-colors hover:text-primary">Invisible Grills (SS316)</Link></li>
              <li><Link href="/services#velcro-mosquito-net" className="text-gray-600 transition-colors hover:text-primary">Velcro Mosquito Nets</Link></li>
              <li><Link href="/services#roller-blinds" className="text-gray-600 transition-colors hover:text-primary">Roller Blinds & Wallpapers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
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
                <MapPin size={18} className="mt-1 text-primary" />
                <p className="text-sm text-gray-600">
                  Shop No. 13, Kharkar Compound, Near Chatrapati Shivaji Maharaj Hospital, Behind HP Gas Compound, Kalwa
                  (W) - 400 605.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center text-gray-600 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} MOSKILL NETTING SOLUTIONS. All rights reserved.</p>
          <p>Developed by <span className="font-bold">EpicPixels</span></p>
          <p>Contact Developer: <span className="font-medium">+91 8591103349| +91 8369429095 | ubhangare32@gmail.com</span></p>
        </div>
      </div>
    </footer>
  )
}
