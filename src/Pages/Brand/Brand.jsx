import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Advertisement from "../../components/Advertisement/Advertisement";

const Brand = () => {
	const products = useLoaderData()
	if(products.length == 0){
		return <div className="w-full min-h-screen flex items-center justify-center text-center">
			<h1 className="text-4xl">Products Not Available </h1>
		</div>
	}
	return (
		<div>
			<div>
				<Advertisement></Advertisement>
			</div>
			<div className="grid md:grid-cols-2 gap-8 px-2 xl:px-24 py-12">
				{
					products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
				}
			</div>
		</div>
	);
};

export default Brand;