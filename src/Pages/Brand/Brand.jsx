import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Advertisement from "../../components/Advertisement/Advertisement";

const Brand = () => {
	const products = useLoaderData()
	// console.log(products);
	return (
		<div>
			<div>
				{/* <Advertisement></Advertisement> */}
			</div>
			<div className="grid grid-cols-2 gap-8 px-24 py-12">
				{
					products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
				}
			</div>
		</div>
	);
};

export default Brand;