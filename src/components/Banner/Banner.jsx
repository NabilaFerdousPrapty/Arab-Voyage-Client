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
           
           <div className="lg:pt-28 pt-14 title text-white font-bold lg:text-5xl md:text-3xl text-2xl text-center" data-swiper-parallax="-300">
           Explore the Enchantment of the Middle East
          </div>
          <div className="subtitle text-white text-center lg:py-8 py-3 lg:text-3xl md:text-2xl text-sm" data-swiper-parallax="-200">
          Unveiling cultural treasures, breathtaking landscapes, and modern marvels
          </div>
          <div className="text text-center md:text-xl text-xs text-white" data-swiper-parallax="-80">
            <p>
            Embark on an unforgettable journey through the heart of the Middle East. Discover ancient wonders in Jordan, from Petra's rose-red city to the Dead Sea's therapeutic waters. Immerse yourself in the rich tapestry of Saudi Arabia, from the sacred city of Makkah to the futuristic metropolis of Neom. Dazzle your senses in the United Arab Emirates, where towering skyscrapers meet pristine beaches. Explore the historical sites and vibrant culture of Iran. Experience the luxurious hospitality of Qatar. Unwind in the comfort of Kuwait's modern amenities. The Middle East is a land of endless possibilities, waiting to be explored.
            </p>
            <div className="btn my-4">Explore</div>
          </div>
           
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${rum})`,
            }}
          >
            <div className="pt-10 title text-white font-bold text-5xl flex justify-center items-center" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${us})`,
            }}
          >
           <div className="pt-10 title text-white font-bold text-5xl flex justify-center items-center" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${plam})`,
            }}
          >
            <div className="pt-10 title text-white font-bold text-5xl flex justify-center items-center" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="bg-center bg-cover bg-no-repeat h-screen rounded-2xl"
            style={{
              backgroundImage: `url(${redSea})`,
            }}
          >
             <div className="pt-10 title text-white font-bold text-5xl flex justify-center items-center" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          </div>
        </SwiperSlide>
        
     
      
        
      </Swiper>
    </div>
  );
};

export default Banner;
