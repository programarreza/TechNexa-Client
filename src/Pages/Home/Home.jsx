import { useEffect } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Category from "../../components/Header/Category/Category";
import News from "../../components/News/News";
import Technology from "../../components/Technology/Technology";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
	useEffect(()=> {
		Aos.init({duration: 2000})
	},[])
	return (
		<div>
			<Banner></Banner>
			<Category></Category>
			<News></News>
			<Technology></Technology>
		</div>
	);
};

export default Home;