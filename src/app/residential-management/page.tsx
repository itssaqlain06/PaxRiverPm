import Image from 'next/image'
import Link from 'next/link'

export default function ResidentialManagement() {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <h1 className="text-center text-3xl font-serif font-semibold mb-4">
          Residential Management
        </h1>
        <p className="text-center max-w-4xl mx-auto">
          Discover the convenience and peace of mind that comes with Pax River
          PM's residential management services. Our dedicated team handles all
          aspects of residential property management, from tenant placement to
          day-to-day affairs. Whether you're a homeowner here in Maryland or
          stationed halfway across the world, we've got your back. Experience
          worry‑free property ownership and exceptional tenant care with Pax
          River PM.
        </p>
      </div>
      {/* Row of houses image */}
      <Image
        src="/images/residential-houses.png"
        alt="Residential homes"
        width={799}
        height={100}
        className="w-full h-auto object-cover"
      />
      <section className="container mx-auto px-4 py-8 space-y-10">
        {/* Tenant Placement Services */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Tenant Placement Services
          </h2>
          <p>
            At Pax River PM, our tenant placement services are designed to
            simplify the rental process for property owners while ensuring the
            highest level of tenant quality. Let us help you secure reliable,
            responsible, and long‑term tenants for your investment property. Get
            started today and experience the Pax River PM advantage in tenant
            placement.
          </p>
          <p className="font-medium mt-2">
            Our tenant placement services start at 7% of the yearly rent.{' '}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact us
            </Link>{' '}
            for a personalized quote.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Swift and Efficient Marketing</h3>
              <p>
                We prioritize efficiency to minimize vacancy periods and find
                suitable tenants quickly. Our proactive approach and
                comprehensive marketing strategies ensure prompt occupancy. To
                attract a wide pool of potential tenants, we employ professional
                advertising techniques. This includes high‑quality photography,
                property showings seven days a week, and an extensive online
                presence. We leverage major search engines, online classifieds,
                and off‑site marketing avenues to maximize exposure and attract
                qualified renters.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Professional Photography and Virtual Tours</h3>
              <p>
                To enhance the appeal of your property, we employ professional
                photography, 3D tours, and floorplan layouts. These immersive
                tools provide potential renters with a detailed virtual
                experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Thorough Tenant Screening</h3>
              <p>
                Tenant quality is paramount to us. Our tenant screening process,
                powered by TransUnion, covers credit history, criminal
                background checks, and eviction history. We also conduct pet
                screening if applicable, ensuring reliable and compatible
                tenants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Streamlined Security Deposit Handling</h3>
              <p>
                Our online portal allows tenants to submit security deposits
                conveniently through bank accounts or credit cards. We also
                offer the convenience of eSignatures, eliminating the need for
                physical paperwork.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Lease Drafting</h3>
              <p>
                We take care of drafting the lease agreements, ensuring they
                are legally sound and tailored to your property's unique
                requirements. Our meticulous approach ensures clarity and
                compliance for both landlords and tenants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Personalized Service</h3>
              <p>
                We understand that each property is unique, and so are the
                needs of its owner. Our tenant placement services can be
                tailored to meet your specific requirements, providing flexible
                solutions that align with your property's distinct
                characteristics and your investment goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p>
                Our tenant placement services are competitively priced,
                starting at just 7% of the annual rent.{' '}
                <Link href="/contact-us" className="text-blue-600 hover:underline">
                  Contact us
                </Link>{' '}
                today for a personalized quote and discover how we can
                assist you in finding the right tenant for your property.
              </p>
            </div>
          </div>
        </div>

        {/* Middle row of illustrative images */}
        <div>
          <Image
            src="/images/residential-middle.png"
            alt="Tenant placement illustrations"
            width={799}
            height={190}
            className="w-full h-auto object-cover my-6"
          />
        </div>

        {/* Rental Management Services */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Rental Management Services
          </h2>
          <p>
            When you have a rental property, you don't want to stress about
            dealing with any problems that might arise. Pax River Property
            Management will take care of everything, from rental payments to
            maintenance requests. We'll make sure your property remains in good
            shape.
          </p>
          <p className="font-medium mt-2">
            Our rental management services start at 9% of the monthly rent.{' '}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact us
            </Link>{' '}
            for a personalized quote tailored to your property's
            requirements.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Tenant Relations and Communication</h3>
              <p>
                We act as a dedicated point of contact for your tenants,
                providing prompt responses to their inquiries, requests, and
                concerns. Our proactive communication fosters positive tenant
                relations and encourages long‑term tenancies. We also provide
                tenants with access to a 24/7 emergency line to address urgent
                issues promptly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Rent Collection and Financial Management</h3>
              <p>
                Our streamlined rent collection procedures offer tenants
                multiple payment options for their convenience. We handle
                security deposits, ensuring compliance with legal requirements,
                and provide you with transparent, detailed financial statements
                to keep you informed about your property's financial
                performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Property Maintenance and Repairs</h3>
              <p>
                Preserving your property's value is paramount. Our team
                oversees all maintenance and repair tasks, from routine
                inspections to emergency repairs. We address issues promptly,
                ensuring tenant satisfaction and protecting your investment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Legal Compliance and Eviction Management</h3>
              <p>
                Navigating the complex legal landscape of rental management can
                be challenging. We ensure that your property remains in
                compliance with all applicable laws and regulations. In cases
                requiring eviction, we handle the process efficiently and
                professionally, safeguarding your interests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Transparent Reporting and Technology Integration</h3>
              <p>
                Our online portal provides you with real‑time access to
                financial statements, lease agreements, and property
                maintenance updates. This transparency empowers you to stay
                informed about your property's performance effortlessly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Personalized Service</h3>
              <p>
                We understand that each property is unique, and so are the
                needs of its owner. Our tenant placement services can be
                tailored to meet your specific requirements, providing flexible
                solutions that align with your property's distinct
                characteristics and your investment goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p>
                Our rental management services are competitively priced,
                starting at just 9% of the monthly rent.{' '}
                <Link href="/contact-us" className="text-blue-600 hover:underline">
                  Contact us
                </Link>{' '}
                for a personalized quote tailored to your property's
                requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Online portal section */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Our online portal allows easy access to everything you need
          </h2>
          <p>
            Our user‑friendly online portal ensures effortless access to all the
            tools you need for efficient property management. Available on
            Android, iOS, or any web browser, our sleek portal provides an
            intuitive self‑service experience for both property owners and
            tenants.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>
              Easily view your tenant's account details, keeping you informed
              about payments and balances.
            </li>
            <li>
              Stay organized with a streamlined system for tracking maintenance
              requests submitted by tenants. This feature even allows for
              photo attachments to provide clear information.
            </li>
            <li>
              Offer tenants the convenience of secure online rent and security
              deposit payments from any device. They can set up automatic
              payments for consistent, on‑time transactions.
            </li>
            <li>
              Access essential property reports, including monthly account
              statements, vendor invoices, and yearly 1099 forms. These reports
              provide a comprehensive overview of your property's financial
              performance.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}