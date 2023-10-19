import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brand = () => {
	const products = useLoaderData()
	console.log(products);
	return (
		<div className="grid grid-cols-2 gap-8 px-24">
			{
				products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
			}
		</div>
	);
};

export default Brand;