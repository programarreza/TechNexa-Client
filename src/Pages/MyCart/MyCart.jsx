import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/cart')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setProducts(data)
			})
	}, [])
	return (
		<div className="grid grid-cols-3 gap-5 px-24 my-8">
			{
				products.map(product => <MyCartCard key={product._id} product={product}></MyCartCard>)
			}
		</div>
	);
};

export default MyCart;