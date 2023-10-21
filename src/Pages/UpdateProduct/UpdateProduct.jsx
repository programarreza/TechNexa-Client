import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const UpdateProduct = () => {

	const loadedProduct = useLoaderData()
	console.log(loadedProduct);
	const { _id, image, name, brand_name, type, price, rating, description } = loadedProduct;

	useEffect(()=> {
		Aos.init({duration: 1000})
	},[])

	const handleUpdateProduct = (e) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget)
		const image = form.get('image')
		const name = form.get('name')
		const brand_name = form.get('brand_name')
		const type = form.get('type')
		const price = form.get('price')
		const description = form.get('description')
		const rating = form.get('rating')

		console.log(image, name, brand_name, type, price, description, rating);
		const updatedProduct = { image, name, brand_name, type, price, rating, description }

		
		fetch(`https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/product-update/${_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedProduct)
		})
			.then(res => res.json())
			.then(data => {
				if (data.matchedCount > 0) {
					Swal.fire(
						'Product Updated',
						'Updated Successfully!',
						'success'
					)
				}
				console.log(data);
			})
	}
	return (
		<div className="px-24 pb-12" data-aos="zoom-in-down">
			<h2 className="text-center my-6 text-3xl font-bold">Update Product</h2>
			<form onSubmit={handleUpdateProduct}>
				<div className="grid grid-cols-2 gap-6">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Image</span>
						</label>
						<label className="">
							<input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<label className="">
							<input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>


					<div className="form-control">
						<label className="label">
							<span className="label-text">Brand Name</span>
						</label>
						<select name="brand_name" defaultValue={brand_name} className="select select-bordered">
							<option disabled selected>Select Brand Name</option>
							<option>Apple</option>
							<option>Samsung</option>
							<option>Xiaomi</option>
							<option>Sony</option>
							<option>Google</option>
							<option>Lenovo</option>
						</select>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Type</span>
						</label>
						<select name="type" defaultValue={type} className="select select-bordered">
							<option disabled selected>Type </option>
							<option>Phone</option>
							<option>Computer</option>
							<option>Headphone</option>
							<option>Speaker</option>
							<option>Watch</option>
						</select>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Price</span>
						</label>
						<label className="">
							<input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Rating</span>
						</label>
						<select name="rating" defaultValue={rating} className="select select-bordered">
							<option disabled selected>Select Rating</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>

				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Short description</span>
					</label>
					<label className="">
						<input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered focus-visible:border-hidden rounded-md w-full py-10" />
					</label>
				</div>
				<div className="text-center">
					<button className="btn mt-5" type="submit">Update Now</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateProduct;