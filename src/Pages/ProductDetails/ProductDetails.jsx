import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ProductDetails = () => {
	const detailsProduct = useLoaderData()
	const { image, name, price, description, rating } = detailsProduct;
	console.log(detailsProduct);
	const cartProduct = { image, name, price, description, rating };

	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])


	const handleAddCart = (cartProduct) => {
		fetch('https://tech-nexa-server-q4jaehquk-md-shafikul-islams-projects.vercel.app/cart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartProduct)

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
		<div className="px-5 md:px-12 lg:px-24 mx-auto flex justify-center" data-aos="fade-bottom">
			<div className="card lg:w-[60%] lg:h-[100vh] glass">
				<figure><img className="w-full h-full" src={image} alt="car!" /></figure>
				<div className=" md:flex justify-between p-4">
					<div>
						<h2 className="card-title">Model: {name}</h2>
						<p>Price: {price}$</p>
					</div>
					<div className="card-actions justify-center">
						<button onClick={() => handleAddCart(cartProduct)} className="btn bg-gray-500 text-white">Add To Card</button>
					</div>
				</div>
				<div className='mt-3 p-4'>
					{
						description.length > 450 ? <p>{description.slice(0, 450)} </p> : <p>{description}</p>
					}
				</div>
				{/* <h2 className="p-5">{description}</h2> */}
			</div>
		</div>
	);
};

export default ProductDetails;