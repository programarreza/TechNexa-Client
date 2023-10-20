import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
	const [newses, setNews] = useState([])
	

	useEffect(() => {
		fetch('http://localhost:5000/news')
			.then(res => res.json())
			.then(data => {
				setNews(data);
			})
	}, [])
	return (
		<div className="my-12">
			<h2 className="text-center text-5xl font-bold mb-16">Read Our Latest News</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 xl:px-24">
			{
				newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
			}

		</div>
		</div>
	);
};

export default News;