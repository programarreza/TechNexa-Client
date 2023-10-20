import { AiFillApple } from 'react-icons/ai';
import { TbBrandOpenai } from 'react-icons/tb';
import { BsSmartwatch } from 'react-icons/bs';
import { MdOutlineMonitor } from 'react-icons/md';


const Technology = () => {
	return (
		<div className="flex h-screen justify-center items-center flex-col">
			<div
				className="w-full h-screen bg-[url('https://i.postimg.cc/wx0x8Dyv/solve-bg-1.jpg')] bg-cover bg-center">
				<div className="w-full h-full flex  justify-center items-center bg-[#0d0b18]/80 backdrop-brightness-50">
					<div>
						<h2 className="text-white text-4xl text-center">Help You Overcome Your <br /> Technology Challeges</h2>
						<div className='grid grid-cols-2 gap-4  lg:grid-cols-4 lg:gap-12 xl:gap-28 mt-12'>
							<div className='text-2xl border-sky-400 rounded-md cursor-pointer text-white text-center w-44 border py-5'>
								<AiFillApple className='text-8xl mx-auto bg-[#191728] rounded-full p-3' />
								<p className='mt-4'>ISO</p>
							</div>
							<div className='text-2xl border-sky-400 rounded-md cursor-pointer text-white text-center w-44 border py-5'>
								<TbBrandOpenai className='text-8xl mx-auto bg-[#191728] rounded-full p-3' />
								<p className='mt-4'>AI</p>
							</div>
							<div className='text-2xl border-sky-400 rounded-md cursor-pointer text-white text-center w-44 border py-5'>
								<BsSmartwatch className='text-8xl mx-auto bg-[#191728] rounded-full p-3' />
								<p className='mt-4'>Wearalable</p>
							</div>
							<div className='text-2xl text-white text-center w-44 border border-sky-400 rounded-md py-5 cursor-pointer'>
								<MdOutlineMonitor className='text-8xl mx-auto bg-[#191728] rounded-full p-3' />
								<p className='mt-4'>TV</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;