import { Swiper, SwiperSlide } from "swiper/react";
import dark from '../../assets/banner.png'
import redSea from '../../assets/the-red-sea.jpg'
import expore from '../../assets/explore.png'
import rum from '../../assets/Wadi Rum.jpg'
import us from '../../assets/us.png'
import plam from '../../assets/The Palm Jumeirah .jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className=" mb-10">
      <Swiper
        navigation={true}

        autoplay={
          {
            "delay": 2500,
            "disableOnInteraction": false
          }
        }
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        loop={true}
        modules={[Navigation,Autoplay,Pagination]}
        className="mySwiper "
      >
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${expore})`,
            }}
          >
           
           <div className="2xl:pt-28 xl:pt-8 pt-5 title text-white font-bold xl:text-5xl md:text-3xl text-xl text-center" data-swiper-parallax="-300">
           Explore the Enchantment of the Middle East
          </div>
          <div className="subtitle text-white text-center lg:py-8 py-1 xl:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Unveiling cultural treasures, breathtaking landscapes, and modern marvels
          </div>
          <div className="text text-center md:text-xl text-xs text-white" data-swiper-parallax="-80">
            <p>
            Embark on an unforgettable journey through the heart of the Middle East. Discover ancient wonders in Jordan, from Petra's rose-red city to the Dead Sea's therapeutic waters. Immerse yourself in the rich tapestry of Saudi Arabia, from the sacred city of Makkah to the futuristic metropolis of Neom. Dazzle your senses in the United Arab Emirates, where towering skyscrapers meet pristine beaches. Explore the historical sites and vibrant culture of Iran.
            </p>
            <div className="btn my-8">Explore</div>
          </div>
           
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${rum})`,
            }}
          >
          <div className="2xl:pt-28 xl:pt-8 pt-5 title text-white font-bold lg:text-5xl md:text-3xl text-2xl text-center" data-swiper-parallax="-300">
          Where History Whispers in the Wind
          </div>
          <div className="subtitle text-white text-center lg:py-8 py-1 xl:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Explore ancient ruins, captivating landscapes, and the Dead Sea's unique experience
          </div>
          <div className="text text-center md:text-xl text-xs text-white" data-swiper-parallax="-80">
            <p>
            Journey through time in Jordan. Delve into the awe-inspiring city of Petra, a UNESCO World Heritage Site carved from rose-red sandstone cliffs. Float effortlessly in the Dead Sea, the Earth's lowest point, renowned for its therapeutic waters. Explore the captivating a UNESCO World Heritage Site known as the "Valley of the Moon." 
            </p>
            <div className="btn my-8">Explore</div>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${us})`,
            }}
          >
          <div className="2xl:pt-28 xl:pt-8 pt-5 title text-white font-bold xl:text-5xl md:text-3xl text-2xl text-center" data-swiper-parallax="-300">
          Unveiling Ancient Treasures and Modern Marvels
          </div>
          <div className="subtitle text-white text-center lg:py-8 py-1 xl:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Explore historical sites, vibrant culture, and futuristic visions
          </div>
          <div className="text text-center md:text-xl text-xs text-white" data-swiper-parallax="-80">
            <p>
            Experience the rich tapestry of Saudi Arabia. Visit the sacred city of Makkah, the holiest site in Islam. Explore the UNESCO World Heritage Site of Mada'in Saleh, an ancient city carved from sandstone. Immerse yourself in the cultural and artistic scene of Riyadh, the capital city. 
            </p>
            <div className="btn my-4">Explore</div>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl brightness-50"
            style={{
              backgroundImage: `url(${plam})`,
              
            }}
          >
         <div className="2xl:pt-28 xl:pt-8 pt-5 title text-gray-600 font-bold xl:text-5xl md:text-3xl text-2xl text-center" data-swiper-parallax="-300">
         United Arab Emirates: Where Luxury Meets Adventure
          </div>
          <div className="subtitle text-gray-600 text-center lg:py-8 py-1 xl:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Experience world-class attractions, pristine beaches, and vibrant culture
          </div>
          <div className="text text-center md:text-xl text-xs text-gray-100" data-swiper-parallax="-80">
            <p>
            Dazzle your senses in the United Arab Emirates. Ascend the iconic Burj Khalifa, the tallest building in the world. Explore the opulent desert resorts and traditional souks. Relax on pristine beaches with turquoise waters. 
            </p>
            <div className="btn my-8">Explore</div>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl "
            style={{
              backgroundImage: `url(${dark})`,
            }}
          >
          <div className="2xl:pt-28 xl:pt-8 pt-5 title text-white font-bold xl:text-5xl md:text-3xl text-2xl text-center" data-swiper-parallax="-300">
          Unveiling a Land of Rich History and Culture
          </div>
          <div className="subtitle text-white  text-center xl:py-8 py-3 xl:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Explore ancient ruins, architectural wonders, and vibrant traditions.
          </div>
          <div className="text text-center md:text-xl text-xs text-white" data-swiper-parallax="-80">
            <p>
             Explore the historical sites of Iran. Marvel at the architectural wonders of Isfahan, a UNESCO World Heritage Site. Immerse yourself in the rich tapestry of Persian culture. Visit the ancient city of Persepolis, a UNESCO World Heritage Site, and marvel at the remnants of the Achaemenid Empire. 
            </p>
            <div className="btn my-8">Explore</div>
          </div>
          </div>
        </SwiperSlide>
        
     
      
        
      </Swiper>
    </div>
  );
};

export default Banner;
