import Rating from '@mui/material/Rating';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const BrandCard = ({ product }) => {
	const { _id, image, name, brand_name, type, price, rating } = product;
	console.log(_id);

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div>
			<div className="hero md:w-full h-full bg-base-200" data-aos="fade-bottom">
				<div className="p-4 lg:hero-content flex-col lg:flex-row">
					<img src={image} className="w-[100%] lg:w-[200px] md:h-[250px] lg:h-[150px]  rounded-lg shadow-2xl" />
					<div className=" lg:flex justify-between">
						<div className=''>
							<h1 className="text-xl font-bold"> {name}</h1>
							<h1 className="text-xl font-bold">Brand: <span className='text-base'>{brand_name}</span></h1>
							<h1 className="text-xl font-bold">Type: <span className='text-base'>{type}</span></h1>
							<h1 className="text-xl font-bold">Price: <span className='text-base'>{price}$</span></h1>

							<div className="flex items-center ">
								<p className="text-xl font-bold">Rating : </p>
								<Rating name="read-only" value={rating} readOnly />
							</div>
						</div>

						<div className="flex mt-4 justify-between btn-group btn-group-col mr-auto block lg:btn-group-vertical lg:space-y-4 lg:mt-auto ">
							<Link to={`/product-details/${_id}`}>
								<button className="btn bg-gray-500 hover:bg-gray-700 text-white mb-12">Details </button>
							</Link>
							<Link to={`/updateProduct/${_id}`}>
								<button className="btn bg-gray-500 hover:bg-gray-700 text-white">Update </button>
							</Link>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandCard;
BrandCard.propTypes = {
	product: PropTypes.object,
}