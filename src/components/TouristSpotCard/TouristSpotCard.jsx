import { IoLocationOutline } from "react-icons/io5";
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
  return (
    <div className="">
      <div className="max-w-lg p-4 shadow-md  border-2 border-gray-400 rounded-2xl my-6 h-[500px]">
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
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-indigo-600">
               
              </h3>
            </a>
            <p className="leading-snug text-gray-600">
              {
                shortDescription
              
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
