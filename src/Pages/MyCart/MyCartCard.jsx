import { Rating } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const MyCartCard = ({ product, products, setProducts }) => {
	const { _id, image, name, price, description, rating } = product;
	console.log(rating);
	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	const handleDeleteProduct = (id) => {
		console.log(id);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		})
			.then((result) => {
				if (result.isConfirmed) {

					fetch(`https://tech-nexa-server-lvmsbzkde-md-shafikul-islams-projects.vercel.app/cart/${id}`, {
						method: 'DELETE'
					})
						.then(res => res.json())
						.then(data => {
							console.log(data);
							if (data.deletedCount > 0) {
								console.log('deleted successfully');
								Swal.fire(
									'Deleted Successfully!',
									'Your Product has been deleted.',
									'success'
								)

								const filter = products.filter(product => product._id !== id)
								setProducts(filter)
							}
						})
				}
			})

	}
	return (
		<div>
			<div className="card card-compact bg-base-100  shadow-xl" data-aos="fade-top">
				<figure><img className="w-full h-[250px]" src={image} alt="Shoes" /></figure>
				<div className="p-4 flex flex-col jb">
					<div className='h-[170px]'>
						<h2 className="card-title">{name}</h2>
						<div className="flex justify-between">
							<p className="text-lg font-semibold">Price: {price}$</p>
							<div className="flex items-center ">
								<p className="text-lg font-semibold">Rating : </p>
								<Rating name="read-only" value={rating} readOnly />
							</div>
						</div>
						<div className='mt-3'>
							{
								description.length > 100 ? <p>{description.slice(0, 100)} </p> : <p>{description}</p>
							}
						</div>
					</div>

					<div className="card-actions justify-center">
						<button onClick={() => handleDeleteProduct(_id)} className="btn bg-gray-500 text-white w-full mt-4 hover:bg-gray-700">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyCartCard;
MyCartCard.propTypes = {
	product: PropTypes.object,
	products: PropTypes.array,
	setProducts: PropTypes.func,
}