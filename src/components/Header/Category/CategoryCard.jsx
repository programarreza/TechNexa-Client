import PropTypes from 'prop-types'; 
const CategoryCard = ({ category }) => {
	const {name, photo} = category;
	return (
		<div>
			<div className="card card-compact bg-base-100 shadow-xl rounded-lg">
				<figure><img src={photo} className='h-[300px]' alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;

CategoryCard.propTypes = {
	category: PropTypes.node,
}