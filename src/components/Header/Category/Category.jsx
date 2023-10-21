import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch('https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/category')
			.then(res => res.json())
			.then(data => {
				setCategories(data)
			})
	}, [])

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 xl:px-24 py-12 mx-auto ">
			{
				categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
			}
		</div>
	);
};

export default Category;