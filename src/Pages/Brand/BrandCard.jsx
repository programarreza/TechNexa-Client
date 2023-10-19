import PropTypes from 'prop-types';



const BrandCard = ({ product }) => {
	const { image, name, brand_name, type, price, rating } = product;

	return (
		<div>
			<div className="hero w-full h-full bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img src={image} className="w-[200px] h-[150px]  rounded-lg shadow-2xl" />
					<div className="flex">
						<div>
							<h1 className="text-xl font-bold"> {name}</h1>
							<h1 className="text-xl font-bold">Brand: <span className='text-base'>{brand_name}</span></h1>
							<h1 className="text-xl font-bold">Type: <span className='text-base'>{type}</span></h1>
							<h1 className="text-xl font-bold">Price: <span className='text-base'>{price}$</span></h1>
							<h1 className="text-xl font-bold">Rating: <span className='text-base'>{rating}</span></h1>
						
						</div>

						<div className="btn-group btn-group-vertical space-y-4 mt-auto">
							<button className="btn bg-gray-500 text-white mb-12">Details </button>
							{/* <Link to={`update-coffee/${_id}`}> */}
								<button className="btn bg-gray-500 text-white">Update </button>
							{/* </Link> */}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrandCard;
BrandCard.propTypes = {
	product: PropTypes.node,
}