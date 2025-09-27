import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section>
        <Image
          src="/images/home-hero.jpg"
          alt="Southern Maryland landscape"
          width={1726}
          height={350}
          className="w-full h-auto object-cover"
        />
        <div className="py-8 px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-4">
            Property Management in Southern Maryland
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg">
            Welcome to Pax River Property Management LLC, your trusted partner in
            residential and homeowners' association (HOA) management. We take
            pride in being a family-owned business deeply dedicated to serving
            the unique needs of Southern Maryland and its vibrant communities.
            Our commitment to excellence is unwavering, and we're here to
            transform your property management experience.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Our Commitment to Excellence
          </h2>
          <p>
            At Pax River PM, we understand that managing properties requires a
            delicate balance of expertise, personalized service, and open
            communication. Our mission is to provide you with the exceptional
            support and tailored solutions needed to achieve the highest
            standards of property management.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">A Local Touch</h2>
          <p>
            Based in the heart of St. Mary's County, we proudly serve all of
            Southern Maryland, including Charles and Calvert Counties. Our
            local expertise allows us to offer insights and solutions that are
            uniquely suited to our community's needs. When you choose Pax River
            PM, you're not just choosing a property management company; you're
            selecting a partner who understands the intricacies of our area and
            is committed to its growth and prosperity.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Specialists in Residential and Association Management
          </h2>
          <p>
            We specialize in managing a diverse range of properties, including
            residential properties and condominium and homeowners' associations
            (COAs/HOAs). Our residential property management services encompass
            tenant placement, day-to-day operations, and property maintenance,
            whether you're a local property owner or stationed halfway across
            the world. Additionally, we excel in condominium and homeowner
            associations, handling maintenance requests, violation reports,
            budgeting, financial reporting, association dues collection, and
            fostering effective communication with board members and residents
            alike.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Effortless Communication
          </h2>
          <p>
            Our commitment to transparency is unwavering. We provide a
            state-of-the-art resident and owner portal, accessible online or
            through the iOS/Android app store. This powerful tool simplifies
            communication, offering instant access to financial reports,
            accounts receivable, maintenance requests, and more. Stay
            connected and informed through your preferred communication
            method, be it mail, email, texts, or push notifications (available
            with the app).
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Your Customized Solution
          </h2>
          <p>
            We understand that every property and community is unique, and so
            are your management requirements. Our services are fully
            customizable to align with your preferences. Whether you prefer
            hands-on involvement or a more hands-off approach, we adapt to
            your needs. With Pax River PM, you have the freedom to shape the
            level of engagement that suits your property or community best.
          </p>
        </div>
        <div className="text-lg font-medium">
          Let Pax River PM handle the stressful parts of owning a property.
          Give us a call at{' '}
          <a href="tel:+12406613222" className="text-blue-600 hover:underline">
            (240) 661-3222
          </a>{' '}
          or{' '}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            contact us
          </Link>{' '}
          to learn more about our property management services in Southern
          Maryland.
        </div>
      </section>
    </div>
  )
}