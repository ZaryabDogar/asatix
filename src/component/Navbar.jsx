import { useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Function to handle scroll events
	const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point (you can adjust this value)
		const scrollY = window.scrollY;
		if (scrollY > 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	// Effect to add scroll event listener
	useEffect(() => {
		// Add event listener when component mounts
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={` font-raleway w-full    fixed bg-[#0A0B0D] z-20 ${
			isScrolled ? ' shadow-sm py-5' : ' py-8'
		  }`}>
			<div
				className={`flex items-center md:justify-evenly justify-between w-full py-4 sm:pt-4 pt-8`}
			>
				{/* img  */}
				<div className="flex lg:pr-64 md:pl-0 pl-5">
					<img src="/logo.png" alt="" className="xl:w-full w-[169px] " />
				</div>

				<div className="sm:flex  hidden  text-[18px] lg:space-x-14 space-x-3 items-center lg:pl-64 md:pr-0 pr-5">
					<div className="sm:flex hidden">
						<div className="flex ">
							<ul
								className={`decoration-transparent font-jost flex items-center justify-end  text-[16px] lg:space-x-8 space-x-3  text-[#223366]`}
							>
								<Link to="/">
									<li className={` font-[500]  leading-[30px]`}>Home</li>
								</Link>
								<Link to="#">
									<li className={`font-[500]  leading-[30px]`}>About</li>
								</Link>
								<Link to="#">
									<li className={`font-[500]   leading-[30px]`}>Contact</li>
								</Link>
							</ul>
						</div>
					</div>
					<div
						className={`flex items-centertext-[18px]  lg:space-x-14 space-x-5 lg:pr-0 pr-3   `}
					></div>
				</div>

				<button
					type="button"
					className={`  font-medium text-3xl  px-2 py-2 text-center  focus:outline-none sm:hidden block  pr-5 `}
					onClick={toggleDropdown}
				>
					<RxHamburgerMenu />
				</button>
			</div>
			{/* responsive  */}

			<div
				className={`w-[100vw] p- pb-20 pt-4 shadow-xl absolute top-[0px] right-0 border-1 z-50 bg-white h-screen flex flex-col transition-transform duration-500 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className={`flex items-center justify-between w-full py-4  pt-4`}>
					{/* img  */}
					<div className="flex md:pr-24 md:pl-0 pl-5">
						<img src="/logo.png" alt="" className="xl:w-full w-[169px] " />
					</div>

					<button
						type="button"
						className={`  text-4xl  px-2 py-2 text-center  focus:outline-none sm:hidden block  pr-5 z-30 font-bold`}
						onClick={toggleDropdown}
					>
						<RxCross2 />
					</button>
				</div>
				<div className=" pt-8 ">
					<ul className="font-normal font-sans   flex flex-col w-full justify-center text-center items-center space-y-8 text-[28px] text-bluetext">
						<Link to="/">
							<li className={``}>Home</li>
						</Link>
						<Link to="/">
							<li className={``}>About</li>
						</Link>
						<Link to="/">
							<li className={``}>Contact</li>
						</Link>
						<Link to="/">
							<li className={``}>Blog</li>
						</Link>
					</ul>
					{/* buttons */}
				</div>
				<div className=" flex justify-center w-full items-end h-full">
					<Link to="#">
						<button
							type="button"
							className={`  text-5xl text-bluetext  px-2 py-2 text-center  focus:outline-none sm:hidden block  pr-5 z-30 font-bold`}
						>
							<FaLinkedinIn />
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
