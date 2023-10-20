import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<Toaster/>
		</div>
	);
};

export default MainLayout;