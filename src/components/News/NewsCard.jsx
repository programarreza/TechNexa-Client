
import { BsBoxArrowRight } from 'react-icons/bs';
const NewsCard = ({ news }) => {
	const { name, photo, description } = news;
	return (
		<div>
			<div className="card card-compact bg-base-100 shadow-xl">
				<figure><img src={photo} alt="Shoes" /></figure>
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p>{description}</p>
					<div className="card-actions justify-start">
						<button className="font-semibold flex items-center">Read More <BsBoxArrowRight className='ml-2'/></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;