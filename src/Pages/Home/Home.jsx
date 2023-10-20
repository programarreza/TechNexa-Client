import Banner from "../../components/Header/Banner/Banner";
import Category from "../../components/Header/Category/Category";
import News from "../../components/News/News";
import Technology from "../../components/Technology/Technology";

const Home = () => {
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