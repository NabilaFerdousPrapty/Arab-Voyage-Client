import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountrySpot = () => {
    const { country_Name } = useParams();
  console.log(country_Name);
  const [spot, setSpot] = useState([]);
  useEffect(() => {
    fetch(`https://arab-voyage-server.vercel.app/touristSpots/${country_Name}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        console.log(data);
      });
  }, [country_Name]);
    return (
        <div>
            
        </div>
    );
};

export default CountrySpot;