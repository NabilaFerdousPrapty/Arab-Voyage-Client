import React from "react";

const TouristsSpots = ({ data }) => {
  const {
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
  } = data;
  
  return (
    <div>
      <h1>TouristsSpots
        {data.length}
    

      </h1>
      {
     

      }
    </div>
  );
};

export default TouristsSpots;
