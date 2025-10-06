import { lusitanaTitle, sourceSans } from "@/app/fonts";

export default function AvailableUnit() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <h2
          className={`${lusitanaTitle.className} uppercase text-center text-[32px] w-full mb-5 py-8 border-b-2 border-[#BFD9E9]`}
        >
          AVAILABLE FOR RENT
        </h2>
        <p className={`${lusitanaTitle.className} text-[30px] leading-[30px] text-center mt-5`}>
          45715 N Maxine Way <br /> Great Mills, MD 20634
        </p>
        <button className="bg-primary-lightBlue hover:bg-primary-darkBlue text-white text-xl font-bold px-7 py-2 mt-4 rounded">
          Click here to apply
        </button>
      </div>

      <p className="text-sm">
        <strong>Rent:</strong> $2,350/month
      </p>
      <p className="mt-2 text-sm">
        <strong>Description:</strong> Welcome to your new home just minutes away
        from shopping and NAS Pax River! This lovely three-level townhome,
        boasting a brand-new roof installed in 2024, offers an abundance of
        space and thoughtful amenities. With freshly installed luxury vinyl
        planks and freshly painted walls throughout, the spacious living area
        provides a welcoming atmosphere...
      </p>

      <p className="mt-4 text-sm">
        <strong>Requirements:</strong> No smoking. Stable employment required.
        $45 nonrefundable application fee (per applicant).
      </p>
      <p className="text-sm">
        <strong>Rent includes:</strong> Parking and Snow Removal
      </p>

      <p className="mt-4 text-sm">
        <strong>Unit amenities:</strong> Air conditioner, Dishwasher, Disposal,
        Dryer, Microwave, Mirrors, Private sunroom, Refrigerator, Stove/Oven,
        Hardwood and carpet, Washer
      </p>
      <p className="text-sm">
        <strong>Property amenities:</strong> Trash, Parking, Snow Removal
        (included in rent)
      </p>

      <h3 className="mt-6 font-semibold">Additional application details:</h3>
      <ul className="list-disc list-inside text-sm">
        <li>RENT: $2,350/month</li>
        <li>SECURITY DEPOSIT: $2,350</li>
        <li>
          Additional Fees:
          <ul className="list-disc list-inside ml-4">
            <li>
              $45 Application Fee per applicant 18 or older (nonrefundable)
            </li>
            <li>Pet rent of $50/month per pet</li>
            <li>Pet deposit of $250</li>
          </ul>
        </li>
        <li>Available Date: 04/01/25</li>
        <li>
          Lease length: 1-3 year leases accepted *Other terms, fees, and
          conditions may apply
        </li>
      </ul>

      <p className="mt-4 text-sm">
        SMOKING: No Smoking Allowed in or on the Property
      </p>
      <p className="text-sm">
        INCOME REQUIREMENTS: Minimum Gross Income Requirement (before taxes) is
        2 times the rental rate of the property you would like to rent.
      </p>
      <p className="text-sm">
        CREDIT REQUIREMENTS: Minimum Credit Score of 600 is required for ALL
        financially responsible applicants...
      </p>

      <div className="text-center my-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Click here to apply
        </button>
      </div>

      <h3 className="text-center text-xl font-semibold">Gallery</h3>
      <div className="h-64 bg-gray-100 mt-4 flex items-center justify-center">
        <span className="text-gray-400">Gallery Placeholder</span>
      </div>

      <h3 className="text-center text-xl font-semibold mt-8">Location</h3>
      <div className="h-64 bg-gray-100 mt-4 flex items-center justify-center">
        <span className="text-gray-400">Location Map Placeholder</span>
      </div>

      <div className="text-center my-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Click here to apply
        </button>
      </div>
    </div>
  );
}
