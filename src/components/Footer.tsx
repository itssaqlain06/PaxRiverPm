import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { lusitanaTitle, sourceSans } from '@/app/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t-8 border-[#BFD9E9] mt-8 pt-7 text-sm">
      <div className="max-w-[1400px] mx-auto px-7 sm:px-10 lg:px-9 py-8 flex flex-wrap gap-y-8 justify-center sm:justify-between md:justify-between">
        <div className="w-full sm:w-[48%] md:w-[32%] text-center sm:text-left">
          <h3 className={`${lusitanaTitle.className} mb-6 text-[23px]`}>Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/association-management" className={`${sourceSans.className} text-xl text-primary-lightBlue hover:text-primary-darkBlue transition-colors duration-300`}>
                Association Management
              </Link>
            </li>
            <li>
              <Link href="/residential-management" className={`${sourceSans.className} text-xl text-primary-lightBlue hover:text-primary-darkBlue transition-colors duration-300`}>
                Residential Management
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <h3 className={`${lusitanaTitle.className} my-6 text-[23px]`}>Online Portal</h3>
            <Link
  href="/login"
  className={`${sourceSans.className} inline-flex items-center gap-2 text-xl py-2 px-4 rounded-sm text-white bg-primary-lightBlue hover:bg-primary-darkBlue transition-colors duration-300`}
>
  <FontAwesomeIcon icon={faShareFromSquare} className="h-5 w-5" />
  Click here to login
</Link>
          </div>
        </div>

        <div className="w-full sm:w-[48%] md:w-[32%] text-center sm:text-left">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center sm:justify-start">
              <FiPhone className="mr-2" />
              <a href="tel:+12406613222" className="hover:underline hover:text-blue-700 transition-colors duration-300">
                (240) 661-3222
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FiMail className="mr-2" />
              <a href="mailto:info@paxriverpm.com" className="hover:underline hover:text-blue-700 transition-colors duration-300">
                info@paxriverpm.com
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FiMapPin className="mr-2" />
              P.O. Box 465, Leonardtown, MD 20650
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FiClock className="mr-2" />
              Monday - Friday: 8:30am - 5:30pm
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-full md:w-[32%] flex justify-center md:block text-center md:text-left">
          <div className="inline-block">
            <h3 className="font-semibold mb-3">Affiliations and Associations</h3>
            <Image
              src="/images/logos.png"
              alt="Affiliations logos"
              width={270}
              height={80}
              className="object-contain w-auto h-16 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center">
        <p className="mb-2">Copyright © 2025 Pax River Property Management LLC</p>
        <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
