import Image from 'next/image'
import Link from 'next/link'

export default function AssociationManagement() {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <h1 className="text-center text-3xl font-serif font-semibold mb-4">
          Association Management
        </h1>
        <p className="text-center max-w-4xl mx-auto">
          When entrusting your community's management to a professional
          company, you deserve the confidence that they will be both
          proactive and dedicated. At Pax River PM, we excel at overseeing
          every aspect of your HOA/COA, from resident communication to
          maintenance handling to board guidance. Let us handle the
          complexities of running your association, so you can enjoy peace
          of mind.
        </p>
        <p className="text-center max-w-4xl mx-auto mt-4">
          We understand that every board has different preferences when it
          comes to involvement. That's why we customize our services to
          align with your needs. Whether you prefer a hands‑off approach,
          only being contacted for board approval, or desire regular
          updates on maintenance requests and financial matters, we're here
          to accommodate your preferences. We even offer the option of
          monthly meetings with board members to review completed tasks and
          discuss your association's objectives.
        </p>
        <p className="text-center max-w-4xl mx-auto mt-4">
          Our resident portal, accessible online or via our iOS/Android
          app, serves as a convenient one‑stop hub for all your association's
          requirements. Gain immediate access to financial reports,
          accounts receivable, delinquent accounts, vendor invoices,
          maintenance requests, violation notices, and more with ease.
        </p>
        <p className="text-center max-w-4xl mx-auto mt-4">
          Ready to explore the tailored solutions Pax River PM can provide
          for your community?{' '}
          <Link
            href="#proposal"
            className="text-blue-600 hover:underline"
          >
            Request a proposal
          </Link>{' '}
          today, or contact us at (240) 661‑3222 to learn how we can
          enhance your community management experience.
        </p>
      </div>
      {/* Row of townhouse images */}
      <Image
        src="/images/association-houses.png"
        alt="Townhomes"
        width={715}
        height={90}
        className="w-full h-auto object-cover"
      />
      <section className="container mx-auto px-4 py-8 space-y-10">
        {/* Our Association Management Services */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Our Association Management Services
          </h2>
          <p>
            At Pax River PM, our comprehensive services are designed to
            elevate your community management experience. Contact us today
            to discover how we can transform the management of your
            property and enhance the quality of life within your
            association.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Efficient Day‑to‑Day Management</h3>
              <p>
                We excel in seamlessly managing day‑to‑day operations
                while keeping you well‑informed every step of the way. We
                act as a reliable point of contact for residents,
                alleviating the board's involvement in routine inquiries and
                concerns. Additionally, we take charge of coordinating and
                attending your association's annual meetings, ensuring
                residents are promptly notified. We provide monthly
                financial reports and annual budgets to ensure you always
                have a clear understanding of your community's financial
                health.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Seamless Communication for Your Community</h3>
              <p>
                Our online portal allows residents to submit maintenance
                requests and communicate directly with residents and
                fellow board members. Residents have the flexibility to
                choose their preferred communication method. This not only
                fosters community communication but also reduces
                unnecessary paper mail, saving on stationery costs.
                Additionally, we provide a message board feature to
                encourage residents to engage in discussions and actively
                participate in their community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Expert Management of Accounts and Vendors</h3>
              <p>
                Our team expertly manages accounts payable and vendor
                contracts, ensuring vendors are paid promptly and that no
                unexpected costs are incurred. We periodically review
                contracts to guarantee you receive the most favorable
                terms and prices available in the market. Within our
                online portal, you can easily track every fee, deposit,
                check, and refund, providing you with a transparent
                overview of your association's finances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Effortless HOA Dues Collection</h3>
              <p>
                We prioritize a seamless approach to HOA dues collection,
                offering residents flexible payment options. Whether
                residents prefer the traditional method of checks or the
                modern convenience of online autopay, our user‑friendly
                online portal accommodates their preferences. Additionally,
                we provide the flexibility to apply late fees, as per your
                association's bylaws, after a predefined grace period,
                reinforcing adherence to payment schedules within the
                community. In cases of delinquent accounts, our proactive
                approach includes timely notifications to account owners
                and, when necessary, initiating legal actions to recover
                outstanding balances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Prompt and Efficient Maintenance Management</h3>
              <p>
                Our property maintenance services are designed to address
                the needs of your community promptly and efficiently.
                Residents can easily submit maintenance requests through
                our online portal, which we promptly resolve. For minor
                repairs, our in‑house maintenance team steps in, saving you
                both time and money. When larger projects arise, we
                source an unlimited number of quotes from multiple
                vendors for the board's review. We take charge of
                coordinating and overseeing all maintenance and repair
                work on your property’s common elements, ensuring that
                contractors deliver top‑notch results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Proactive Property Care</h3>
              <p>
                Our proactive approach includes monthly property visits to
                ensure there are no violations and that common elements are
                well‑maintained. We also provide recommendations for
                preventative maintenance to keep your property in
                excellent condition, reducing the likelihood of future
                issues.
              </p>
            </div>
          </div>
        </div>

        {/* Online portal benefits section */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            Our online portal allows easy access to everything you need
          </h2>
          <p>
            Accessible on iOS, Android, or any web browser, our online
            portal provides a user‑friendly and intuitive self‑service
            experience for unit owners and board members alike.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold mb-2">Benefits for unit owners:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Securely make online payments for association fees from
                  anywhere. You can even set up automatic payments for
                  hassle‑free, on‑time payments.
                </li>
                <li>Submit and track maintenance requests, including photo attachments.</li>
                <li>Communicate with other residents using our community message board.</li>
                <li>Stay informed with timely community announcements from the Board. Receive updates via text messages, emails, or push notifications.</li>
                <li>View association documents, such as meeting minutes and bylaws, for easy reference.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Benefits for board members:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Effortlessly communicate with your association by sending announcements that reach all units.</li>
                <li>Generate personalized reports for your community, including income statements, delinquency rates, budget vs. actuals, and more.</li>
                <li>Access a comprehensive ledger containing all transaction records for your association.</li>
                <li>Monitor violations and maintenance requests and stay updated on their status and resolutions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Request A Proposal form */}
        <div id="proposal">
          <h2 className="text-2xl font-serif font-semibold mb-2">Request A Proposal</h2>
          <form className="space-y-4 max-w-xl">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="association" className="block font-medium">
                Name of association<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="association"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="location" className="block font-medium">
                Location of community (City, State)
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="location"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="homes" className="block font-medium">
                Number of homes / units / lots<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="homes"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="style" className="block font-medium">
                Community style (single family / apartment / condo / townhome / etc)
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="style"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="comments" className="block font-medium">
                Comments
              </label>
              <textarea
                id="comments"
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}