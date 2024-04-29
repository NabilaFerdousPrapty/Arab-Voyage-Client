import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const TouristSpotCard = ({ spot }) => {
  const {
    _id,
    image,
    spotName,
    countryName,
    locationName,
    shortDescription,
    average_cost,
    season,
    travelTime,
    totalVisitorsPerYear,
    username,
    email,
  } = spot;
  console.log(spot);
  return (
    <div className="">
      <div className="max-w-lg p-4 shadow-md  border-2 border-gray-400 rounded-2xl md:my-3 h-[650px]">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize F font-semibold"
            >
              {spotName}
            </a>
          </div>
          <p>
            <span className="text-xl font-semibold text-gray-600">
              {countryName}
            </span>
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 "
            />
            <div className="flex items-center text-xs">
              
               <IoLocationOutline/> {locationName} 

             
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-gray-600">
                Average Cost:{" "}
              </span>
              <span className="text-sm font-semibold text-gray-600">
                {average_cost}
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-gray-600">
                Season:{" "}
              </span>
              <span className="text-sm font-semibold text-gray-600">{season}</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <span className="text-sm font-semibold text-gray-600">
                  Travel Time:{" "}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {travelTime}
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-600">
                  Total Visitors Per Year:{" "}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {totalVisitorsPerYear}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-indigo-600">
               
              </h3>
            </a>
            <p className="leading-snug text-gray-600">
              {
                shortDescription.slice(0, 80)
              
              }
              ........
            </p>

            
          </div>
          <div className="flex justify-end items-end my-5">
            <Link to={`/touristSpotDetails/${_id}`}
              className="block w-full p-3 text-center rounded-sm text-white bg-gray-700 hover:bg-gray-900"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
