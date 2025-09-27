import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-blue-200 mt-12 text-sm">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/association-management" className="text-blue-600 hover:underline">
                Association Management
              </Link>
            </li>
            <li>
              <Link href="/residential-management" className="text-blue-600 hover:underline">
                Residential Management
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Online Portal</h3>
            <Link href="/login" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Click here to login
            </Link>
          </div>
        </div>
        {/* Contact Us column */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FiPhone className="mr-2" /> (240) 661-3222
            </li>
            <li className="flex items-center">
              <FiMail className="mr-2" /> info@paxriverpm.com
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-2" /> P.O. Box 465, Leonardtown, MD 20650
            </li>
            <li className="flex items-center">
              <FiClock className="mr-2" /> Monday - Friday: 8:30am - 5:30pm
            </li>
          </ul>
        </div>
        {/* Affiliations column */}
        <div>
          <h3 className="font-semibold mb-2">Affiliations and Associations</h3>
          <Image
            src="/images/logos.png"
            alt="Affiliations logos"
            width={270}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center">
        <p className="mb-2">Copyright © 2025 Pax River Property Management LLC</p>
        <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  )
}