import Image from 'next/image'
import Link from 'next/link'

export default function ResetPassword() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <Image
          src="/images/logo.png"
          alt="Pax River logo"
          width={500}
          height={100}
          className="mx-auto mb-4 w-40 h-auto object-contain"
        />
        <h1 className="text-center text-2xl font-semibold mb-4">Reset password</h1>
        <p className="text-center text-sm mb-4">
          Enter the email address associated with your account and we'll send
          you instructions to reset your password.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Type your email..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send reset instructions
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          <Link href="/resident-center" className="text-blue-600 hover:underline">
            Go back
          </Link>
        </p>
      </div>
    </div>
  )
}