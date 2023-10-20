import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
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
					navigation={false}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full' src="https://i.postimg.cc/mgMMKS4F/samsung-summer-sale-1560172421.jpg" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full ' src="https://i.postimg.cc/6qML5V5f/Untitled-design-2023-06-09-T192222-909.webp" alt="" /></SwiperSlide>
					<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full ' src="https://i.postimg.cc/prBwkSVY/Festive-desktop-banner.webp" alt="" /></SwiperSlide>
				</Swiper>
			</>
		</div>
	);
};

export default Banner;