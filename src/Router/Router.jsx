import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Brand from "../Pages/Brand/Brand";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/addProduct",
				element: <PrivateRoute>
					<AddProduct></AddProduct>
				</PrivateRoute>
			},
			{
				path: "/myCart",
				element: <PrivateRoute>
					<MyCart></MyCart>
				</PrivateRoute>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/products/:brand",
				element: <Brand></Brand>,
				loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
			},
			{
				path: "/products/:id",
				element: <ProductDetails></ProductDetails>,
				loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
			}
		]
	}
])

export default router;