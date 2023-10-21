import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://tech-nexa-server-q4jaehquk-md-shafikul-islams-projects.vercel.app/cart')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setProducts(data)
			})
	}, [])
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-2 lg:px-24 my-8 w-full min-h-screen">
			{
				products.map(product => <MyCartCard key={product._id} product={product} products={products} setProducts={setProducts}></MyCartCard>)
			}
		</div>
	);
};

export default MyCart;