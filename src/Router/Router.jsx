import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Brand from "../Pages/Brand/Brand";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import News from "../components/News/News";
import PrivateRoute from "./PrivateRoute";

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
				loader: ({ params }) => fetch(`https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/products/${params.brand}`)
			},
			{
				path: "/product-details/:id",
				element: <PrivateRoute>
					<ProductDetails></ProductDetails>
				</PrivateRoute>,
				loader: ({ params }) => fetch(`https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/product-details/${params.id}`)
			},
			{
				path: "/updateProduct/:id",
				element: <PrivateRoute>
					<UpdateProduct></UpdateProduct>
				</PrivateRoute>,
				loader: ({params}) => fetch(`https://tech-nexa-server-391m8l6ks-md-shafikul-islams-projects.vercel.app/product-update/${params.id}`)
			}
		]
	}
])

export default router;