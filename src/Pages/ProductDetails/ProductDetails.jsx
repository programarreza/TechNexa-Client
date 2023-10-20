import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
	const detailsProduct = useLoaderData()
	const {_id, image, name, price, description } = detailsProduct;
	console.log(detailsProduct);
	return (
		<div className="px-12 lg:px-24 mx-auto flex justify-center">
			<div className="card lg:w-[60%] lg:h-[100vh] glass">
				<figure><img className="w-full h-full" src={image} alt="car!" /></figure>
				<div className=" flex justify-between p-4">
					<div>
					<h2 className="card-title">Model: {name}</h2>
					<p>Price: {price}$</p>
					</div>
					<div className="card-actions justify-center">
						<button className="btn bg-gray-500 text-white">Add To Card</button>
					</div>
				</div>
					<h2 className="p-5">{description}</h2>
			</div>
		</div>
	);
};

export default ProductDetails;