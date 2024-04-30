import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";


const TouristSpotDetails = () => {
  
  const { id } = useParams();
  console.log(id);
  const [spot, setSpot] = useState([]);
  useEffect(() => {
    fetch(`https://arab-voyage-server.vercel.app/singleSpot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data);
      });
  }, [id]);
  
  const {
    spotName,
    countryName,
    locationName,
    average_cost,
    season,
    travelTime,
    totalVisitorsPerYear,
    shortDescription,
    image,
  }=spot;

 
  
  return (
    <div>
      <div className="">
        <div className="max-w-full mx-auto p-4 shadow-md  border-2 border-gray-400 rounded-2xl md:my-3 ">
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
                className="block object-cover object-center mx-auto rounded-md w-4/5 h-4/5 "
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
              <p className="leading-snug text-gray-600 text-center">
                {spot.shortDescription}
               
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TouristSpotDetails;
