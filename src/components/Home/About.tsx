"use client";

import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

const About: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center px-6 py-6  text-center">
			<div className="border border-purple-600 p-12 shadow-lg shadow-purple-600 mb-20">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 mb-6">
					About Me
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg text-gray-300 max-w-3xl mb-6">
					I am a passionate{" "}
					<span className="text-purple-400 font-bold">
						MERN Stack Developer
					</span>
					, currently honing my skills at Entri Elevate. With a strong
					foundation in programming and problem-solving, I am committed to
					building efficient and scalable applications.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-lg text-gray-300 max-w-3xl mb-6">
					My experience includes hands-on freelancing work, where I contributed
					to the
					<span className="text-purple-400 font-bold">
						{" "}
						Rolanaplast Project
					</span>
					. I played a key role in frontend development, leveraging{" "}
					<span className="text-purple-400 font-semibold">Recoil</span> for
					state management and ensuring seamless user experiences.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="text-lg text-gray-300 max-w-3xl">
					Driven by a deep passion for software development, I thrive on solving
					complex problems and continuously evolving in this ever-changing
					industry. I am always eager to explore new technologies and refine my
					expertise in full-stack development.
				</motion.p>
			</div>

			{/* Internship Experience */}
			<div className="border border-purple-600 p-12 shadow-lg shadow-purple-600 mb-16">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.0 }}
					className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600  mb-6">
					Internship Experience
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="text-lg text-gray-300 max-w-3xl mb-6">
					I completed an enriching internship as a{" "}
					<span className="text-purple-400 font-bold">
						Full Stack Developer
					</span>{" "}
					at{" "}
					<span className="text-purple-400 font-semibold">
						Entri Elevate Institute
					</span>
					, where I contributed to the development of dynamic web applications.
				</motion.p>

				<ul className="list-disc text-left text-gray-300 max-w-3xl space-y-2">
					<motion.li
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 1.4 }}
						className="text-lg">
						Designed and developed user-friendly frontend components using{" "}
						<span className="text-purple-400 font-bold">React.js</span> and{" "}
						<span className="text-purple-400 font-semibold">Tailwind CSS</span>.
					</motion.li>

					<motion.li
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 1.6 }}
						className="text-lg">
						Developed and optimized backend APIs using{" "}
						<span className="text-purple-400 font-bold">Express.js</span> and{" "}
						<span className="text-purple-400 font-semibold">MongoDB</span>.
					</motion.li>

					<motion.li
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 1.8 }}
						className="text-lg">
						Implemented efficient state management using{" "}
						<span className="text-purple-400 font-bold">Recoil</span>, improving
						app performance and user interactions.
					</motion.li>
				</ul>
			</div>
			{/* Skills Component */}
			<div className="mt-12">
				<Skills />
			</div>
		</div>
	);
};

export default About;
