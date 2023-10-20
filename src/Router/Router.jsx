import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Brand from "../Pages/Brand/Brand";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import News from "../components/News/News";

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
				path: "/news",
				element: <News></News>
			},
			{
				path: "/products/:brand",
				element: <Brand></Brand>,
				loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
			},
			{
				path: "/products/:id",
				element: <ProductDetails></ProductDetails>,
				loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
			},
			{
				path: "/updateProduct/:id",
				element: <UpdateProduct></UpdateProduct>,
				loader: ({params}) => fetch(`http://localhost:5000/product-update/${params.id}`)
			}
		]
	}
])

export default router;