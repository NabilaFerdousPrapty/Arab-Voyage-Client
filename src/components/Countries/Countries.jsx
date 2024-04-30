
import { useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://arab-voyage-server.vercel.app/countries')
      .then(res => res.json())
      .then(data =>{
        console.log(data);
         setCountries(data)})
      .catch(error => console.error(error));
  }, []); 

  return (
    <div className='my-10'>
      <h1 className="text-center font-raleway md:text-4xl text-2xl font-extrabold">Countries To Visit
      </h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
    {
      countries.map((country, index) => <CountryCard key={index} country= {country} ></CountryCard>)
     }
    </div>
    </div>
  );
};

export default Countries;
