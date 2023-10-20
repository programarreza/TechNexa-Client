import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyCartCard = ({ product }) => {
	const { image, name, price, description } = product
	return (
		<div>
			<div className="card card-compact bg-base-100  shadow-xl">
				<figure><img className="w-full h-[250px]" src={image} alt="Shoes" /></figure>
				<div className="p-4">
					<h2 className="card-title">{name}</h2>
					<div className="flex justify-between">
						<p className="text-lg font-semibold">Price: {price}$</p>
						<p className="text-lg font-semibold">Price: {price}$</p>
					</div>
						<div className='mt-3'>
							{
								description.length > 100 ? <p>{description.slice(0, 100)} </p> : <p>{description}</p>
							}
						</div>
					{/* <p>{description}</p> */}
					<div className="card-actions justify-center">
						<button className="btn btn-primary w-full mt-4">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyCartCard;
MyCartCard.propTypes = {
	product: PropTypes.object
}