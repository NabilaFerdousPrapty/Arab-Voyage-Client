import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const TouristSpotDetails = () => {
  const [hide, setHidden] = useState(true);
  const { id } = useParams();
  console.log(id);
  const [spot, setSpot] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data);
      });
  }, [id]);
  const toggleFormVisibility = () => {
    setHidden(!hide);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const image = data.get("image");
    const spotName = data.get("spotName");
    const countryName = data.get("countryName");
    const locationName = data.get("locationName");
    const shortDescription = data.get("shortDescription");
    const average_cost = data.get("average_cost");
    const season = data.get("season");
    const travelTime = data.get("travelTime");
    const totalVisitorsPerYear = data.get("totalVisitorsPerYear");
    
    const updateSpot = {
      image,
      spotName,
      countryName,
      locationName,
      shortDescription,
      average_cost,
      season,
      travelTime,
      totalVisitorsPerYear,
      
    };
    console.log(updateSpot);
    fetch(`http://localhost:5000/updateSpot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Your tourist spot has been Updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "OOPS!",
            text: "Your tourist spot has not been updated",
            icon: "Error",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="">
        <div className="max-w-xl mx-auto p-4 shadow-md  border-2 border-gray-400 rounded-2xl md:my-3 h-[630px]">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="mb-0 capitalize F font-semibold"
              >
                {spot.spotName}
              </a>
            </div>
            <p>
              <span className="text-xl font-semibold text-gray-600">
                {spot.countryName}
              </span>
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={spot.image}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 "
              />
              <div className="flex items-center text-xs">
                <IoLocationOutline /> {spot.locationName}
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-600">
                  Average Cost:{" "}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {spot.average_cost}
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-600">
                  Season:{" "}
                </span>
                {spot.season ? (
                  <span className="text-sm font-semibold text-gray-600">
                    {spot.season}
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-gray-600">
                    Not available
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <span className="text-sm font-semibold text-gray-600">
                    Travel Time:{" "}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {spot.travelTime}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-600">
                    Total Visitors Per Year:{" "}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {spot.totalVisitorsPerYear}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold text-indigo-600"></h3>
              </a>
              <p className="leading-snug text-gray-600">
                {spot.shortDescription}
                ........
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          onClick={toggleFormVisibility}
          className="btn bg-gray-800 px-2 py-1 rounded-md text-white my-3 hover:bg-gray-500"
        >
          Update Tourist Spot
        </div>
      </div>
      {!hide && (
        <section className="p-6 border-2 border-gray-600 rounded-xl my-5">
          <form
            onSubmit={handleSubmit}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className=" gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                  <label htmlFor="image" className="text-sm">
                    Tourist Spot image
                  </label>
                  <input
                    name="image"
                    id="image"
                    defaultValue={spot.image}
                    type="url"
                    placeholder="Add your spot image"
                    className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="spot name" className="text-sm">
                    Tourist Spot name
                  </label>
                  <input
                    name="spotName"
                    defaultValue={spot.spotName}
                    id="spotName"
                    type="text"
                    placeholder="Add your spot name"
                    className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Country name
                  </label>
                  <input
                    name="countryName"
                    defaultValue={spot.countryName}
                    id="countryName"
                    type="text"
                    placeholder="Country name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 h-10 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Location
                  </label>
                  <input
                    name="locationName"
                    defaultValue={spot.locationName}
                    id="locationName"
                    type="text"
                    placeholder="Location name"
                    className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="short description" className="text-sm">
                    short description
                  </label>
                  <input
                    name="shortDescription"
                    defaultValue={spot.shortDescription}
                    id="shortDescription"
                    type="text"
                    placeholder="Enter a short description"
                    className="h-20 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    {" "}
                    Average Cost
                  </label>
                  <input
                    name="average_cost"
                    id=" average_cost"
                    type="text"
                    defaultValue={spot.average_cost}
                    placeholder=" average_cost"
                    className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Seasonality
                  </label>
                  <input
                    name="season"
                    defaultValue={spot.season}
                    id="season"
                    type="text"
                    placeholder="season"
                    className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    {" "}
                    Travel Time
                  </label>
                  <input
                    name="travelTime"
                    defaultValue={spot.travelTime}
                    id=" average_cost"
                    type="text"
                    placeholder=" average_cost"
                    className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Total Visitors Per Year
                  </label>
                  <input
                    name="totalVisitorsPerYear"
                    defaultValue={spot.totalVisitorsPerYear}
                    id="totalVisitorsPerYear"
                    type="text"
                    placeholder=" total Visitors Per Year"
                    className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                    required
                  />
                </div>
                
              </div>
            </fieldset>
            <div className="flex justify-center">
              <button type="submit" className="btn w-full bg-sky-300">
                Submit
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default TouristSpotDetails;
