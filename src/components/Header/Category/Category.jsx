import { useState } from "react";
import { useEffect } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/category')
			.then(res => res.json())
			.then(data => {
				setCategories(data)
			})
	}, [])

	// console.log(categories);
	return (
		<div className="grid grid-cols-3 gap-6 px-24 py-12">
			{/* <h2>Category List : {categories.length}</h2> */}
			
			{
				categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
			}
		</div>
	);
};

export default Category;