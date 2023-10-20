import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
	const detailsProduct = useLoaderData()
	const { image, name, price, description } = detailsProduct;
	console.log(detailsProduct);


	const handleAddCart = (detailsProduct) => {
		fetch('http://localhost:5000/cart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(detailsProduct)

		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire(
						'Product Add to Cart',
						'Successfully!',
						'success'
					)
				}
			})

	}
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
						<button onClick={() => handleAddCart(detailsProduct)} className="btn bg-gray-500 text-white">Add To Card</button>
					</div>
				</div>
				<h2 className="p-5">{description}</h2>
			</div>
		</div>
	);
};

export default ProductDetails;