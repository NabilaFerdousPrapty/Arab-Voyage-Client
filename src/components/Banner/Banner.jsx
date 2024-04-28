import { Swiper, SwiperSlide } from "swiper/react";
import park from '../../assets/Al Shaheed Park -3.jpg'
import theran from '../../assets/Tehran2.jpg'
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
           
           <div className="text-center">
           
           </div>
           
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${rum})`,
            }}
          >
            <h1>Slide1</h1>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${us})`,
            }}
          >
            <h1>Slide1</h1>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${plam})`,
            }}
          >
            <h1>Slide1</h1>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${redSea})`,
            }}
          >
            <h1>Slide1</h1>
          </div>
        </SwiperSlide>
        
     
      
        
      </Swiper>
    </div>
  );
};

export default Banner;
