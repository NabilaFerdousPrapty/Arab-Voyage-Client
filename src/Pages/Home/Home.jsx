
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import FAQ from '../../components/FAQ/FAQ';
import Feature from '../../components/Features/Feature';
import Sponsers from '../../components/Sponsers/Sponsers';
import TouristsSpots from '../../components/TouristsSpots/TouristsSpots ';
import Countries from '../../components/Countries/Countries';

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
           <Banner/>
           <Sponsers/>
         <div className=' my-5'>
            <h1 className="text-center font-raleway md:text-4xl text-2xl font-extrabold">Some Tourist Spots</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1'>
          {
            data.slice(0,6).map((item,index)=><TouristsSpots key={index} data={item}/>)
           }
          </div>
         </div>
           <Feature/>
           <Countries/>
           <FAQ/>
        </div>
    );
};

export default Home;