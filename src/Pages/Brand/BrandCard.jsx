import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const BrandCard = ({ product }) => {
	const {_id, image, name, brand_name, type, price, rating } = product;
	console.log(_id);
	
	return (
		<div>
			<div className="hero md:w-full h-full bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img src={image} className="w-[100%] lg:w-[200px] md:h-[250px] lg:h-[150px]  rounded-lg shadow-2xl" />
					<div className="flex">
						<div>
							<h1 className="text-xl font-bold"> {name}</h1>
							<h1 className="text-xl font-bold">Brand: <span className='text-base'>{brand_name}</span></h1>
							<h1 className="text-xl font-bold">Type: <span className='text-base'>{type}</span></h1>
							<h1 className="text-xl font-bold">Price: <span className='text-base'>{price}$</span></h1>
							<h1 className="text-xl font-bold">Rating: <span className='text-base'>{rating}</span></h1>
						
						</div>

						<div className="btn-group btn-group-vertical space-y-4 mt-auto">
							<Link to={`/product-details/${_id}`}>
							<button className="btn bg-gray-500 text-white mb-12">Details </button>
							</Link>
							<Link to={`/updateProduct/${_id}`}>
								<button className="btn bg-gray-500 text-white">Update </button>
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