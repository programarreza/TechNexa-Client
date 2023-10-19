import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CategoryCard = ({ category }) => {
	const { brand_name, photo } = category;
	return (
		<div>
			<Link to={`/products/${brand_name}`}>
				<div className="card card-compact bg-base-100 shadow-xl rounded-lg">
					<figure><img src={photo} className='h-[300px]' alt="Shoes" /></figure>
					<div className="card-body">
						<h2 className="card-title">{brand_name}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryCard;

CategoryCard.propTypes = {
	category: PropTypes.node,
}