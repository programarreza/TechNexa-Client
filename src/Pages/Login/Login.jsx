import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";


const Login = () => {

	const { login, googleLogin } = useContext(AuthContext)

	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const email = form.get('email')
		const password = form.get('password')
		console.log(email, password);

		login(email, password)
		.then(result => {
			console.log(result.user);
			toast.success('Login Successfully')
		})
		.catch(error => {
			console.log(error);
			toast.error(error.message)
		})
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div className="text-center ">
					<h1 className="text-4xl font-bold">Please Login </h1>

				</div>
				<div className=" flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" name="email" placeholder="email" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input type="password" name="password" placeholder="password" className="input input-bordered" required />
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">Login</button>
						</div>

						<div className="flex justify-between">
							<p>Dont have an Account ? </p>
							<Link to={"/register"} className="btn-link">Create Account</Link>
						</div>

						<div onClick={googleLogin} className="border cursor-pointer flex items-center gap-4 justify-center p-3 rounded-md text-lg font-medium mt-3">
							<FcGoogle />
							<button >Login With Google</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;