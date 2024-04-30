const FAQ = () => {
    return (
      <div>
        <section className=" lg:mt-9 mt-5 rounded-2xl mb-3">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl text-gray-700">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 text-gray-600">
              Planning your dream vacation to the Middle East? We've got you covered!
              Find answers to some of our most frequently asked questions to make
              your Arab Voyage experience unforgettable.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">
                  What countries does Arab Voyage offer tours to?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Arab Voyage offers a variety of exciting tours across the Middle
                  East! Explore the ancient wonders of Jordan, from Petra's
                  rose-red city to the Dead Sea's therapeutic waters. Immerse
                  yourself in the rich tapestry of Saudi Arabia, from the sacred
                  city of Makkah to the futuristic metropolis of Neom. Dazzle your
                  senses in the United Arab Emirates, where towering skyscrapers
                  meet pristine beaches. Discover the historical sites and vibrant
                  culture of Iran. Experience the luxurious hospitality of Qatar.
                  Unwind in the comfort of Kuwait's modern amenities. Let us know
                  your travel preferences, and we'll craft a personalized
                  itinerary for your dream Middle Eastern adventure!
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">
                  What type of tours does Arab Voyage offer?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Arab Voyage caters to a variety of travel styles! We offer
                  cultural tours that delve into the rich history and heritage of
                  the Middle East. Explore ancient ruins, bustling souks, and
                  architectural wonders. Experience the warm hospitality and unique
                  cultures of each region. If you're an adventurer, we have
                  exhilarating desert safaris, thrilling mountain hikes, and
                  scuba diving excursions. We also offer luxurious getaways with
                  five-star accommodations and personalized itineraries. Let us
                  know your interests, and we'll curate the perfect tour for you!
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-indigo-600">
                  What is the best time to visit the Middle East?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  The best time to visit the Middle East depends on your
                  preferences! Generally, the spring (March-May) and autumn
                  (September-November) months offer pleasant weather with
                  comfortable temperatures for exploring. However, if you're keen
                  on experiencing the desert landscapes, consider the cooler winter
                  months (December-February). Keep in mind that some Islamic
                  countries observe Ramadan, which may affect opening hours and
                  local customs. It's always best to research the specific country
                  you're visiting to determine the ideal travel timeframe. Feel
                  free to contact us, and our travel experts will be happy to
                  advise you on the best time to visit based on your desired
                  destinations and activities.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default FAQ;
  