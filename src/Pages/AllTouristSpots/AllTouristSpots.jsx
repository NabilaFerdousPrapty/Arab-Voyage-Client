import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";
import allSpot from "../../assets/allSpot.png";

const AllTouristSpots = () => {
  const allTouristSpots = useLoaderData();
  const [sortedData, setSortedData] = useState(allTouristSpots);
  const [sortDirection, setSortDirection] = useState("asc"); 

  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    const sorted = allTouristSpots.slice().sort((spot1, spot2) => {
      const comparison = spot1.average_cost - spot2.average_cost;
      return newSortDirection === "asc" ? comparison : -comparison;
    });
    setSortedData(sorted);
    setSortDirection(newSortDirection);
  };

  return (
    <div>
      <section className="p-6  ">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <span className="block mb-2 ">Explore the World with Us</span>
            <h1 className="text-5xl font-extrabold ">
              Complete Your Life With Arab Voyage
            </h1>
            <p className="my-8">
              <span className="font-medium text-gray-900">
                Unforgettable Experiences Await.
              </span>{" "}
              Discover a world of thrilling adventures, relaxing getaways, and
              cultural immersion trips. Book your dream vacation with ease and
              explore destinations you've always dreamed of.
            </p>

            <form noValidate="" action="" className="self-stretch space-y-3">
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300 py-3"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300 py-3"
                />
              </div>
              <button
                type="button"
                className="w-full py-3 font-semibold rounded-xl text-white bg-blue-600 hover:bg-slate-400 "
              >
                Join the waitlist
              </button>
            </form>
          </div>
          <img
            src={allSpot}
            alt=""
            className="object-cover lg:h-4/5 w-full rounded-md xl:col-span-3 bg-gray-500"
          />
        </div>
      </section>
      <div>
        <h1 className="text-5xl font-bold text-center my-4 font-raleway">
          All Tourist Spots
        </h1>
        <div>
          <div className="flex justify-center items-center my-10">
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn m-1 bg-blue-400 rounded-xl">
                Sort by Average Cost:{" "}
                {sortDirection === "asc" ? "Ascending" : "Descending"}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-blue-100 rounded-box w-52"
              >
                <li>
                  <button onClick={handleSort} className="hover:bg-sky-200">
                    Ascending
                  </button>
                </li>
                <li>
                  <button onClick={handleSort} className="hover:bg-sky-200">
                    Descending
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-1">
            {sortedData.map((spot) => (
              <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpots;
