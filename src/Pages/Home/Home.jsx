
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import FAQ from '../../components/FAQ/FAQ';
import Feature from '../../components/Features/Feature';
import Sponsers from '../../components/Sponsers/Sponsers';
import TouristsSpots from '../../components/TouristsSpots/TouristsSpots ';
import Countries from '../../components/Countries/Countries';
import { useTypewriter } from 'react-simple-typewriter';


const Home = () => {
    const data=useLoaderData();
    const [text] = useTypewriter({
      words: [ 'Jordan','United Arab Emirates','Saudi Arabia','Qatar','Kuwait','Iran'],
      loop: 0 
    });
    
    return (
        <div>
           <Banner/>
           <Sponsers/>
         <div className='lg:my-10'>
            <h1 className="text-center font-raleway md:text-5xl text-2xl font-extrabold text-gray-800 "> Explore the Enchanting Middle East-{text}</h1>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 mt-4'>
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