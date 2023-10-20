import Swal from "sweetalert2";

const AddProduct = () => {

	const handleAddProduct = (e) => {
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
		const product = { image, name, brand_name, type, price, rating, description }

		fetch('https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(product)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					Swal.fire(
						'Product Added',
						'Successfully!',
						'success'
					)
				}
				console.log(data);
			})


	}

	return (
		<div className="px-2 md:px-24 pb-12">
			<h2 className="text-center my-6 text-3xl font-bold">add product</h2>
			<form onSubmit={handleAddProduct}>
				<div className="grid lg:grid-cols-2 gap-6">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Image</span>
						</label>
						<label className="">
							<input type="text" name="image" placeholder="Image URL" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<label className="">
							<input type="text" name="name" placeholder="Name" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>


					<div className="form-control">
						<label className="label">
							<span className="label-text">Brand Name</span>
						</label>
						<select name="brand_name" className="select select-bordered">
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
						<select name="type" className="select select-bordered">
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
							<input type="text" name="price" placeholder="Price" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
						</label>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Rating</span>
						</label>
						<select name="rating" className="select select-bordered">
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
						<input type="text" name="description" placeholder="Short description" className="input input-bordered focus-visible:border-hidden rounded-md w-full" />
					</label>
				</div>
				<div className="text-center">
					<button className="btn mt-5" type="submit">Add Product</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;