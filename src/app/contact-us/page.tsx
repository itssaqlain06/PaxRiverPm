'use client';

import Link from 'next/link';
import { lusitanaTitle, sourceSans } from '@/app/fonts';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'), { ssr: false });

export default function ContactUs() {
  const captchaRef = useRef<any>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) return;

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      reason: formData.get('reason') as string,
      address: formData.get('address') as string,
      message: formData.get('message') as string,
      token: captchaToken,
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('submit_failed');
      alert('Message sent.');
      e.currentTarget.reset();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch {
      alert('Could not submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className={`${lusitanaTitle.className} text-primary-blackTitle text-center text-[32px] font-serif font-medium mb-2`}>
        CONTACT US
      </h1>
      <div className={`${sourceSans.className} text-primary-lightBlack text-center mb-9 text-[18.6px] font-semibold`}>
        <p>Call us at (240) 661-3222 or fill out the form below if you have any questions. We're here to help you!</p>
        <p className="mt-3">
          If you'd like to request a proposal for association management, please{' '}
          <Link href="/association-management" className="text-primary-lightBlue hover:text-primary-darkBlue transition-colors duration-300">click here</Link>.
        </p>
      </div>

      <div className="max-w-[1080px] mx-auto">
        <form onSubmit={onSubmit} className={`${sourceSans.className} text-[17.6px] space-y-4`}>
          <div>
            <label htmlFor="name" className="block font-normal">
              Name <span className="text-red-600">*</span>
            </label>
            <input name="name" id="name" required className="w-full border border-gray-300 rounded-sm px-3 py-2" />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-600">*</span>
            </label>
            <input type="email" name="email" id="email" required className="w-full border border-gray-300 rounded-sm px-3 py-2" />
          </div>

          <div>
            <span className="block font-medium mb-1">
              Why are you contacting us? <span className="text-red-600">*</span>
            </span>
            <div className="space-y-2 ml-3">
              <label className="flex items-center space-x-2">
                <input type="radio" name="reason" value="association" required className="text-blue-600" />
                <span>Association management</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="reason" value="residential" className="text-blue-600" />
                <span>Residential/rental management</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="reason" value="maintenance" className="text-blue-600" />
                <span>Maintenance request</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="reason" value="other" className="text-blue-600" />
                <span>Other</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block font-medium">Property address</label>
            <input name="address" id="address" className="w-full border border-gray-300 rounded-sm px-3 py-2" />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea name="message" id="message" rows={4} required className="w-full border border-gray-300 rounded-sm px-3 py-2" />
          </div>

          <div className="flex justify-start">
            <div className="rounded-sm">
              <HCaptcha
                ref={captchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY as string}
                theme="light"
                size="normal"
                onVerify={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
                onError={() => setCaptchaToken(null)}
              />
            </div>
          </div>

          <div className="flex justify-center py-6">
            <button
              type="submit"
              disabled={!captchaToken || submitting}
              className={`text-white text-lg px-6 py-2 rounded transition-colors duration-300 ${
                !captchaToken || submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-lightBlue hover:bg-primary-darkBlue'
              }`}
            >
              {submitting ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
