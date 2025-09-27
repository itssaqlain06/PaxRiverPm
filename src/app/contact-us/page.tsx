import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-center text-3xl font-serif font-semibold mb-4">
        Contact Us
      </h1>
      <p className="text-center mb-4">
        Call us at (240) 661‑3222 or fill out the form below if you have any
        questions. We're here to help you! If you'd like to request a
        proposal for association management, please{' '}
        <Link href="/association-management#proposal" className="text-blue-600 hover:underline">click here</Link>.
      </p>
      <form className="space-y-4">
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
          <span className="block font-medium mb-1">
            Why are you contacting us?<span className="text-red-600">*</span>
          </span>
          <div className="space-y-2 ml-3">
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="text-blue-600" />
              <span>Association management</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="text-blue-600" />
              <span>Residential/rental management</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="text-blue-600" />
              <span>Maintenance request</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="reason" className="text-blue-600" />
              <span>Other</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block font-medium">
            Property address
          </label>
          <input
            type="text"
            id="address"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Message<span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
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
  )
}