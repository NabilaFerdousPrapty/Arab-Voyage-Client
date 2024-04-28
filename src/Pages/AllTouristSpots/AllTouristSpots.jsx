import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";

const AllTouristSpots = () => {
  const allTouristSpots = useLoaderData();

  return (
    <div>
      <h2>All Tourist Spots{allTouristSpots.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
       {
        allTouristSpots.map(spot =><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard> )
       }
      </div>
    </div>
  );
};

export default AllTouristSpots;
