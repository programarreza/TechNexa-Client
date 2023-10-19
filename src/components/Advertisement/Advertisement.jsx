import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Advertisement = () => {
	return (
		<div>
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
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full' src="https://i.postimg.cc/JhzLCXrM/8642509.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full ' src="https://i.postimg.cc/3rFQN9kY/horizontal-web-banner-with-laptop-laptop-mockup-451189-71.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full ' src="https://i.postimg.cc/Qtpkg0Pq/18899295.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default Advertisement;