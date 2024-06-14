import React, { useState } from 'react';
import { MdMailOutline } from 'react-icons/md';
const Question = () => {
	const [hover, sethover] = useState(false);
	const [hover2, sethover2] = useState(false);
	const [hover3, sethover3] = useState(false);
	const [hover4, sethover4] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);
	const [showAnswer2, setShowAnswer2] = useState(false);
	const [showAnswer3, setShowAnswer3] = useState(false);
	const [showAnswer4, setShowAnswer4] = useState(false);
	const handelmouseenter = () => {
		sethover(true);
		setShowAnswer(true);
	};
	const handelmouseleave = () => {
		sethover(false);
		setTimeout(() => setShowAnswer(false), 0);
	};
	const handelmouseenter2 = () => {
		sethover2(true);
		setShowAnswer2(true);
	};
	const handelmouseleave2 = () => {
		sethover2(false);
		setTimeout(() => setShowAnswer2(false), 0);
	};
	const handelmouseenter3 = () => {
		sethover3(true);
		setShowAnswer3(true);
	};
	const handelmouseleave3 = () => {
		sethover3(false);
		setTimeout(() => setShowAnswer3(false), 0);
	};
	const handelmouseenter4 = () => {
		sethover4(true);
		setShowAnswer4(true);
	};
	const handelmouseleave4 = () => {
		sethover4(false);
		setTimeout(() => setShowAnswer4(false), 0);
	};
	return (
		<section className="bg-white flex flex-col justify-center w-full items-center pt-20 px-3 transition-all duration-1000 ease-in-out">
			<div
				className="w-full
    text-center flex  justify-center lg:text-[48px]  sm:text-[32px] text-[20px] leading-[54px] items-center lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-1 transition-all ease-in-out duration-1000"
			>
				<p className="text-[#3371B8] font-bold">Does your </p>
				<div className="lg:py-5 2xl:px-12 lg:px-8 py-3 sm:px-16  px-[10%]  bg-gradient-to-br from-[#1782fd]  to-[#ff4815] text-white rounded-[99px] flex items-center lg:space-x-4 space-x-2 justify-center">
					<p className="font-[800]  ">DevOps Engineer</p>{' '}
					<img src="/arrowdown.png" alt="" className="w-[32px] h-[32px]" />
				</div>
				<p className="text-[#3371B8] font-bold">asks</p>
			</div>
			<div className="w-full flex flex-col items-center justify-center 2xl:px-[375px] xl:px-72 lg:px-64 py-12 sm:space-y-3 space-y-3 transition-all ease-in-out duration-1000 lg:pb-28 ">
				{/* q1  */}
				<div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center transition-transform transform-gpu duration-1000 ease-in-out${
						hover
							? 'bg-white  2xl:text-[28px] text-[20px] 2xl:leading-[40px] leading-[30px] text-[#0B2545] border-[2px] border-[#3371B8] 2xl:scale-x-[1.4]  xl:scale-x-[1.45]  lg:scale-x-[1.35] cursor-pointer'
							: 'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '
					} `}>
				<div
					className={` `}
					onMouseEnter={handelmouseenter}
					onMouseLeave={handelmouseleave}
				>
					{!showAnswer && (
						<div className="flex  space-x-5 items-center">
							<p
								className={`font-extrabold text-start ${
									hover
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Q1.
							</p>
							<p className="">
								What measures should we implement to ensure robust security
								across our technology stacks?
							</p>
						</div>
					)}
					{/* Fade-in and fade-out effect for the answer */}
					{showAnswer && (
						<div
							className={`answer-fade opacity-0 transition-opacity  duration-1000 ease-in-out text-[20px] 2xl:leading-[54px] leading-[32px]   ${
								showAnswer ? 'opacity-100 flex  space-x-5 items-center' : ''
							}`}
						>
							<p
								className={`font-extrabold text-start ${
									hover
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Ans
							</p>
							<p className="font-[600] pacity-0 transition-opacity duration-1000 ease-in-out font-sans ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident quidem iure ad quo aspernatur, 
							</p>
						</div>
					)}
				</div>
				</div>
				{/* q2   */}
				<div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center transition-transform transform-gpu duration-1000 ease-in-out${
						hover2
							? 'bg-white  2xl:text-[28px] text-[20px] 2xl:leading-[40px] leading-[30px] text-[#0B2545] border-[2px] border-[#3371B8] 2xl:scale-x-[1.4]  xl:scale-x-[1.45]  lg:scale-x-[1.35] cursor-pointer'
							: 'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '
					} `}>
				<div
					
					onMouseEnter={handelmouseenter2}
					onMouseLeave={handelmouseleave2}
				>
					{!showAnswer2 && (
						<div className="flex  space-x-5 items-center">
							<p
								className={`font-extrabold text-start ${
									hover2
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Q2.
							</p>
							<p className="">
								How can we ensure the security of our CI/CD pipelines and the
								overall DevOps processes? What best practices should be
								implemented?
							</p>
						</div>
					)}
					{/* Fade-in and fade-out effect for the answer */}
					{showAnswer2 && (
						<div
							className={`answer-fade opacity-0 transition-opacity  duration-1000 ease-in-out text-[20px] 2xl:leading-[54px] leading-[32px]   ${
								showAnswer2 ? 'opacity-100 flex  space-x-5 items-center' : ''
							}`}
						>
							<p
								className={`font-extrabold text-start ${
									hover2
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Ans
							</p>
							<p className="font-[600] pacity-0 transition-opacity duration-1000 ease-in-out font-sans ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident quidem iure ad quo aspernatur, 
							</p>
						</div>
					)}
				</div>
				</div>
				{/* q3  */}
				<div className={`flex font-sans rounded-2xl w-full py-3 px-8 space-x-5 items-center transition-transform transform-gpu duration-1000 ease-in-out${
						hover3
							? 'bg-white  2xl:text-[28px] text-[20px] 2xl:leading-[40px] leading-[30px] text-[#0B2545] border-[2px] border-[#3371B8] 2xl:scale-x-[1.4]  xl:scale-x-[1.45]  lg:scale-x-[1.35] cursor-pointer'
							: 'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '
					} `}>
					<div
					
					onMouseEnter={handelmouseenter3}
					onMouseLeave={handelmouseleave3}
				>
					{!showAnswer3 && (
						<div className="flex  space-x-5 items-center">
							<p
								className={`font-extrabold text-start ${
									hover3
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Q3.
							</p>
							<p className="">
								How do we navigate the complexities of adopting new technologies or upgrading our software architecture and ensure smooth integration?

							</p>
						</div>
					)}
					{/* Fade-in and fade-out effect for the answer */}
					{showAnswer3 && (
						<div
							className={`answer-fade opacity-0 transition-opacity  duration-1000 ease-in-out text-[20px] 2xl:leading-[54px] leading-[32px]   ${
								showAnswer3 ? 'opacity-100 flex  space-x-5 items-center' : ''
							}`}
						>
							<p
								className={`font-extrabold text-start ${
									hover3
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Ans
							</p>
							<p className="font-[600] pacity-0 transition-opacity duration-1000 ease-in-out font-sans ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident quidem iure ad quo aspernatur, 
							</p>
						</div>
					)}
				</div>
				</div>
				{/* q4  */}
				<div className={`flex font-sans rounded-2xl py-3 w-full  px-8 space-x-5 items-center transition-transform transform-gpu duration-1000 ease-in-out${
						hover4
							? 'bg-white  2xl:text-[28px] text-[20px] 2xl:leading-[40px] leading-[30px] text-[#0B2545] border-[2px] border-[#3371B8] 2xl:scale-x-[1.4]  xl:scale-x-[1.45]  lg:scale-x-[1.35] cursor-pointer'
							: 'text-[20px] 2xl:leading-[54px] leading-[32px]  bg-[#3371B8] text-white '
					} `}>
					<div 
					onMouseEnter={handelmouseenter4}
					onMouseLeave={handelmouseleave4}
				>
					{!showAnswer4 && (
						<div className="flex  space-x-5 items-center">
							<p
								className={`font-extrabold text-start ${
									hover4
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Q4.
							</p>
							<p className="">
								What measures should we implement to ensure robust security across our technology stacks?


							</p>
						</div>
					)}
					{/* Fade-in and fade-out effect for the answer */}
					{showAnswer4 && (
						<div
							className={`answer-fade opacity-0 transition-opacity  duration-1000 ease-in-out text-[20px] 2xl:leading-[54px] leading-[32px]   ${
								showAnswer4 ? 'opacity-100 flex  space-x-5 items-center' : ''
							}`}
						>
							<p
								className={`font-extrabold text-start ${
									hover4
										? 'bg-gradient-to-br from-[#3473bb]  to-[#E35A35]  bg-clip-text text-transparent xl:text-[40px]'
										: ''
								} `}
							>
								Ans
							</p>
							<p className="font-[600] pacity-0 transition-opacity duration-1000 ease-in-out font-sans ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Provident quidem iure ad quo aspernatur, 
							</p>
						</div>
					)}
				</div>
</div>

			</div>
			<div
				className="w-full flex justify-center 2xl:w-[1380px]
			xl:w-[1050px] lg:w-[900px] bg-gradient-to-br from-[#076de2]  to-[#db471e]  py-14  flex-col items-center   rounded-[24px] relative transition-all duration-1000 ease-in-out"
			>
				<img
					src="/Ellipse 1.png"
					alt=""
					className="absolute right-0 sm:top-0 -top-8 xl:w-[270px] w-[250px]"
				/>
				<img
					src="/Ellipse 3.png"
					alt=""
					className="absolute sm:left-0 sm:bottom-0 -left-16 -bottom-12  xl:w-[402px] w-[250px]"
				/>
				<p className="font-bold lg:text-[48px] lg:leading-[54px] leading-tight text-[32px] font-sans text-white text-center ">
					Partner with Asatix today
				</p>
				<p className="font-[500] text-[20px] lg:leading-[30px]  leading-[26px] lg:text-[18px] font-sans text-white text-center xl:w-[60%] lg:w-[70%] sm:w-[80%] w-[90%]  lg:mt-5 mt-12 ">
					Let us steer your business toward digital transformation, efficiency,
					and success in an ever-evolving technological landscape.
				</p>
				<div className="bg-white flex px-8 py-4 items-center space-x-2 rounded-[8px] lg:mt-20 mt-12">
					<img src="/mail.png" alt="" />
					<p className="bg-gradient-to-r from-[#F1582B]  to-[#F53B72]  bg-clip-text text-transparent font-bold text-[18px]">
						{' '}
						mail@email.com
					</p>{' '}
				</div>
			</div>
		</section>
	);
};

export default Question;
