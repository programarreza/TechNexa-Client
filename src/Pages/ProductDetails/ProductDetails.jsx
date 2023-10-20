import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
	const data = useLoaderData()
	console.log(data);
	return (
		<div>
			<h2>product details</h2>
		</div>
	);
};

export default ProductDetails;