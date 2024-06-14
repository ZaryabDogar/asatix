import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Fotter = () => {
	return (
		<section className="w-full bg-white font-sans flex lg:justify-evenly sm:justify-between sm:px-5 pt-12 items-center justify-center py-12">
			<div className="flex md:space-x-5 md:flex-row flex-col md:space-y-0 space-y-12 items-center xl:pr-64">
				<img src="/logo.png" alt="" className="" />
				<p className="font-[500] text-[16px] leading-[30px] text-[#223568]">
					Copyright © 2023 Asatix. All rights reserved.
				</p>
			</div>
			<div className="sm:flex hidden xl:pl-64">
				<ul className="flex items-center space-x-4">
					<Link to="/">
						<li className={`font-[500] text-[16px] leading-[30px] text-[#223366]`}>Blog</li>
					</Link>
                    <Link to='#'>		
				<button
					type="button"
					className={`  text-xl text-bluetext  px-2 py-2 text-center  focus:outline-none   pr-5 z-30 font-bold`}
				
				>
				<FaLinkedinIn />
				</button></Link>
				</ul>
			</div>
		</section>
	);
};
