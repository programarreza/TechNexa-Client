import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneSquareAlt, FaTwitterSquare } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer className="footer p-10 bg-base-200 text-white bg-[url('https://i.postimg.cc/cHz5ryh6/footer-bg-1.jpg')] bg-cover bg-center backdrop-brightness-50">
				<nav>
					<header className="footer-title text-lg">Services</header>
					<div className="flex items-center ">
						<img src="https://i.postimg.cc/HxMmLHZr/logo.png" className="w-14" alt="" />
						<h2 className="text-5xl ml-2">TechNexa</h2>
					</div>
					<div className='space-y-3 text-lg'>
						<p>technology services play a supporting <br /> and advancing modern businesses</p>
						<div className='flex items-center gap-2 text-base'>
							<p><FaPhoneSquareAlt /></p>
							<p>+8801967310130</p>
						</div>
						<div className='flex items-center gap-2 text-base'>
							<p><FiMail /></p>
							<p>technexa@gmail.com</p>
						</div>
						<div className='flex items-center gap-2 text-base'>
							<p><FaMapMarkerAlt /></p>
							<p>27 Division St, Barial , Bangladesh</p>
						</div>
					</div>
				</nav>
				<nav className='text-lg'>
					<header className="footer-title">Brand</header>
					<a className="link link-hover">Apple</a>
					<a className="link link-hover">Samsung</a>
					<a className="link link-hover">Xiaomi</a>
					<a className="link link-hover">Sony</a>
					<a className="link link-hover">Google</a>
					<a className="link link-hover">Lenovo</a>
				</nav>
				<nav className='text-lg'>
					<header className="footer-title">Legal</header>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
				<form>
					<header className="footer-title text-lg">Subscribe</header>
					<fieldset className="form-control w-80 mt-6">
						<div className="relative">
							<input type="text" placeholder="Get News & Update" className="input  w-full pr-16 text-white bg-transparent border border-white" />
							<button className="btn bg-slate-400 absolute top-0 right-0 rounded-l-none">Subscribe</button>
							<p className='mt-3 text-lg'>technology services play a crucial role in supporting
								and advancing modern businesses and .</p>
						</div>

						<div className='flex gap-5 mt-6'>
							<Link to={"/"} className='text-4xl'><FaFacebook/></Link>
							<Link to={"/"} className='text-4xl'><FaLinkedin/></Link>
							<Link to={"/"} className='text-4xl'><FaTwitterSquare/></Link>
							<Link to={"/"} className='text-4xl'><FaInstagram/></Link>
						</div>
					</fieldset>
				</form>
			</footer>
		</div>
	);
};

export default Footer;