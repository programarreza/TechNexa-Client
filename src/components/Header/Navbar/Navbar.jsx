import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

	const links = <div className="flex items-center gap-5">
		<NavLink
			to="/"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			Home
		</NavLink>
		<NavLink
			to="/addProduct"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			Add Product
		</NavLink>
		<NavLink
			to="/myCart"
			className={({ isActive, isPending }) =>
				isPending ? "pending" : isActive ? "active" : ""
			}
		>
			My Cart
		</NavLink>
	</div>


	return (
		<div className="navbar bg-base-100 shadow-lg">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{links}
					</ul>
				</div>
				<div>
					<h3>TechNexa</h3>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links}
				</ul>
			</div>
			<div className="navbar-end">
				<div className="avatar">
					<div className="w-12 rounded-full mr-3">
						{/* {
							user && <p className="font-medium mr-2">{user?.displayName}</p>
						} */}
						{
							// user ? <div>
							// 	<img src={user?.photoURL} />
							// </div>
							// 	:
							<img src="https://i.postimg.cc/7PS6bh1w/profile.png" />
						}

					</div>
				</div>
				<Link to={"/login"}>
					<button className="btn">Login</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;