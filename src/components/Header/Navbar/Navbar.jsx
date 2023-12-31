// import { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";

import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";
import Theme from "./Theme";
import DropDown from "./DropDown";

// const Navbar = () => {

// 	const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

// 	const handleToggle = (e) => {
// 		if (e.target.checked) {
// 			setTheme("dark")
// 		} else {
// 			setTheme("light");
// 		}
// 	}

// 	useEffect(() => {
// 		localStorage.setItem("theme", theme);
// 		const localTheme = localStorage.getItem("theme");
// 		document.querySelector("html").setAttribute("data-theme", localTheme);
// 	}, [theme])

// 	const { logout, user } = useContext(AuthContext)

// 	const links = <div className="flex items-center gap-5 text-lg font-bold">
// 		<NavLink
// 			to="/"
// 			className={({ isActive, isPending }) =>
// 				isPending ? "pending" : isActive ? "active" : ""
// 			}
// 		>
// 			Home
// 		</NavLink>
// 		<NavLink
// 			to="/addProduct"
// 			className={({ isActive, isPending }) =>
// 				isPending ? "pending" : isActive ? "active" : ""
// 			}
// 		>
// 			Add Product
// 		</NavLink>
// 		<NavLink
// 			to="/myCart"
// 			className={({ isActive, isPending }) =>
// 				isPending ? "pending" : isActive ? "active" : ""
// 			}
// 		>
// 			My Cart
// 		</NavLink>
// 	</div>

// 	const handleLogOut = () => {
// 		logout()
// 			.then(result => {
// 				console.log(result.user);
// 			})
// 			.catch(error => {
// 				console.log(error.message);
// 			})
// 	}

// 	return (
// 		<div className="navbar bg-base-100 shadow-lg">
// 			<div className="navbar-start">
// 				<div className="dropdown">
// 					<label tabIndex={0} className="btn btn-ghost lg:hidden">
// 						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// 					</label>
// 					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
// 						{links}
// 					</ul>
// 				</div>
// 				<div className="flex items-center">
// 					<img src="https://i.postimg.cc/HxMmLHZr/logo.png" className="w-12 mr-2" alt="" />
// 					<h3 className="hidden md:block  text-xl font-semibold">TechNexa</h3>
// 				</div>
// 			</div>
// 			<div className="navbar-center hidden lg:flex">
// 				<ul className="menu menu-horizontal px-1">
// 					{links}
// 				</ul>
// 			</div>
// 			<div className="navbar-end">
// 				{
// 					user && <p className="font-medium mr-2 ">{user?.displayName}</p>
// 				}
// 				<div className="avatar">
// 					<div className="w-12 rounded-full mr-3">
// 						{
// 							user ?
// 								<img src={user?.photoURL} />
// 								:
// 								<img src="https://i.postimg.cc/7PS6bh1w/profile.png" />
// 						}

// 					</div>
// 				</div>
// 				{
// 					user ? <Link to={"/login"}>
// 						<button onClick={handleLogOut} className="btn">Log Out</button>
// 					</Link>
// 						:
// 						<Link to={"/login"}>
// 							<button className="btn">Login</button>
// 						</Link>
// 				}

// 				<label className="swap swap-rotate">

// 					{/* this hidden checkbox controls the state */}
// 					<input type="checkbox"
// 					onChange={handleToggle}
// 					checked={theme === "light" ? false : true}
// 					/>

// 					{/* sun icon */}
// 					<svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

// 					{/* moon icon */}
// 					<svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

// 				</label>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isOpen && (
              <>
                {" "}
                <ul
                  tabIndex={0}
                  className="menu absolute flex h-auto  menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box  md:w-[600px] "
                >
                  {/* all nav links */}
                  <NavbarLinks />
                </ul>
              </>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="w-12"
              src="https://i.postimg.cc/HxMmLHZr/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end ">
          {/* user profile */}
          <Theme />
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
