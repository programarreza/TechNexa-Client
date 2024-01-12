import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Banner = () => {
	
//data-aos = "fade-top"
	return (
		<div >
			<>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide><img className='h-[300px] md:h-[100vh] w-full' src="https://i.postimg.cc/mk1zJ9cH/Untitled.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[100vh] w-full ' src="https://i.postimg.cc/bNXRxxFb/samsung-summer-sale-1560172421.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[100vh] w-full ' src="https://i.postimg.cc/prBwkSVY/Festive-desktop-banner.webp" alt="" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default Banner;