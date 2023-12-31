import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      toast.error("Password should be at least 6 character");
      return;
    } else if (!/^.*(?=.{8,})(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)) {
      toast.error(
        "Password should be at least one capital letter and one special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        profileUpdate(result.user, {
          displayName: name,
          photoURL: photo,
        });
        console.log(result.user);
        toast.success("Registration Successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className=" flex-shrink-0 w-[400px] shadow-2xl bg-base-100">
		<h1 className="text-4xl text-center font-bold pt-2 rounded-xl">Please Register </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="flex justify-between">
              <p>Already have an Account ? </p>
              <Link to={"/login"} className="btn-link">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
