import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-serif font-semibold mb-4">
        Login to our Online Portal
      </h1>
      <p className="text-center mb-8 max-w-3xl mx-auto">
        Pax River Property Management provides you with an online portal to
        make payments on your account, open maintenance tickets, report
        violations, communicate with your community, and more! Login below to
        get started.
      </p>
      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
        {/* Resident login */}
        <div className="flex flex-col items-start md:items-center md:flex-row">
          <div className="flex-1">
            <h2 className="font-semibold mb-1">RESIDENT LOGIN:</h2>
            <p className="text-sm mb-2">(for tenants and HOA/COA owners)</p>
            <Link
              href="/resident-center"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-3"
            >
              Click here to login
            </Link>
          </div>
          <Image
            src="/images/app-icons.png"
            alt="App Store and Google Play logos"
            width={700}
            height={260}
            className="w-72 h-auto object-contain mt-4 md:mt-0 md:ml-4"
          />
        </div>
        {/* Customer login */}
        <div className="flex flex-col items-start md:items-center md:flex-row">
          <div className="flex-1">
            <h2 className="font-semibold mb-1">CUSTOMER LOGIN:</h2>
            <p className="text-sm mb-2">(for rental owners)</p>
            <Link
              href="/resident-center"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-3"
            >
              Click here to login
            </Link>
          </div>
          <Image
            src="/images/app-icons.png"
            alt="App Store and Google Play logos"
            width={700}
            height={260}
            className="w-72 h-auto object-contain mt-4 md:mt-0 md:ml-4"
          />
        </div>
      </div>
    </div>
  )
}