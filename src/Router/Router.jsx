import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/addProduct",
				element: <AddProduct></AddProduct>
			},
			{
				path: "/myCart",
				element: <MyCart></MyCart>
			}
		]
	}
])

export default router;