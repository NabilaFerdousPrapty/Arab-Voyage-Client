
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import FAQ from '../../components/FAQ/FAQ';
import Feature from '../../components/Features/Feature';
import Sponsers from '../../components/Sponsers/Sponsers';
import TouristsSpots from '../../components/TouristsSpots/TouristsSpots ';

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
           <Banner/>
           <Sponsers/>
           <TouristsSpots data={data}/>
           <Feature/>
           <FAQ/>
        </div>
    );
};

export default Home;