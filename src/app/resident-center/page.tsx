import Image from 'next/image'
import Link from 'next/link'

export default function ResidentCenter() {
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
        <h1 className="text-center text-2xl font-semibold mb-4">Resident Center</h1>
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
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Type your password..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-blue-600" />
              <span>Remember me</span>
            </label>
            <Link href="/reset-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <p className="text-xs text-center mt-4">
          Property manager, rental owner, or vendor?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in here
          </Link>
        </p>
        <p className="text-xs text-center mt-4 text-gray-500">
          By signing in you agree to Buildium's Privacy Policy and Terms of
          Service.
        </p>
      </div>
    </div>
  )
}