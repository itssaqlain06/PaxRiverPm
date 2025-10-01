'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      toast.error('Please fill in both fields')
      setLoading(false)
      return
    }

    toast.success('Sign-in successful!')
  }

  return (
    <div className="relative min-h-screen flex">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/customer-login.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full md:w-6/12 bg-[#153D58] text-white shadow-lg p-8 bg-opacity-90 min-h-screen flex flex-col justify-center items-start">
        {/* Align "Sign in" text to the start */}
        <h1 className="text-4xl font-medium text-left text-white w-full">Sign in</h1>

        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember my email
            </label>
            <Link href="/forgot-password" className="text-sm text-indigo-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#5C9266] text-white rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">or</span>
          </div>

          {/* Center the Google sign-in button */}
          <button
            type="button"
            className="w-full mt-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 flex justify-center items-center"
          >
            <span className="mr-2">
              <Image
                src="/images/google-logo.svg"
                alt="Google"
                width={20}
                height={20}
              />
            </span>
            <span>Sign in with Google</span>
          </button>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              By signing in, you agree to <Link href="/terms" className="text-indigo-500 hover:underline">Terms of Use</Link> and <Link href="/privacy" className="text-indigo-500 hover:underline">Privacy Policy</Link>.
            </span>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link href="/resident-login" className="text-sm text-indigo-500 hover:underline">
            Are you looking for your Resident Center? Sign in here.
          </Link>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
