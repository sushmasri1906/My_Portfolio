"use client";

import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

const About: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center px-6 py-12 text-center lg:text-left">
			{/* About Me Section */}
			<div className="border border-purple-600 p-8 sm:p-12 shadow-lg shadow-purple-600 mb-16 w-full max-w-5xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 mb-6 text-center">
					About Me
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
					I am a passionate{" "}
					<span className="text-purple-400 font-bold">Software Developer</span>{" "}
					with hands-on experience in building dynamic and scalable applications
					using <span className="text-purple-400 font-semibold">React</span>,{" "}
					<span className="text-purple-400 font-semibold">Next.js</span>, and{" "}
					<span className="text-purple-400 font-semibold">
						Headless CMS like Sanity
					</span>
					. Currently, I&apos;m working at{" "}
					<span className="text-purple-400 font-bold">Biz-Link Pvt Ltd</span>,
					where I&apos;ve contributed to various real-world projects,
					collaborating closely with teams to deliver impactful solutions.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
					Software development isn&apos;t just my profession it7apos;s my{" "}
					<span className="text-purple-400 font-bold">passion</span>. I enjoy
					coding, learning new technologies, and turning complex problems into
					elegant, high-performing solutions. I strive to grow continuously by
					taking on new challenges that push my technical boundaries.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="text-base sm:text-lg text-gray-300 leading-relaxed">
					My aim is to secure a{" "}
					<span className="text-purple-400 font-bold">
						challenging position
					</span>{" "}
					in a reputed organization and grow into a higher role by continuously
					improving my skills, contributing to impactful projects, and staying
					aligned with emerging tech trends.
				</motion.p>
			</div>

			{/* Internship Section */}
			<div className="border border-purple-600 p-8 sm:p-12 shadow-lg shadow-purple-600 mb-16 w-full max-w-5xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.0 }}
					className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 mb-6 text-center">
					Internship Experience
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
					I completed a hands-on internship as a{" "}
					<span className="text-purple-400 font-bold">
						Full Stack Developer
					</span>{" "}
					at{" "}
					<span className="text-purple-400 font-semibold">
						Entri Elevate Institute
					</span>
					. I contributed to a full-featured{" "}
					<span className="text-purple-400 font-bold">Instagram Clone</span>{" "}
					named <span className="text-purple-400 font-bold">HexVibe</span> using
					technologies like{" "}
					<span className="text-purple-400 font-semibold">Next.js</span>,{" "}
					<span className="text-purple-400 font-semibold">Recoil</span>,{" "}
					<span className="text-purple-400 font-semibold">Express.js</span>, and{" "}
					<span className="text-purple-400 font-semibold">Cloudinary</span>.
				</motion.p>

				<ul className="list-disc pl-6 text-left text-gray-300 space-y-3 text-base sm:text-lg">
					{[
						"Designed and developed user-friendly frontend components using React.js and Tailwind CSS.",
						"Developed and optimized backend APIs using Express.js and MongoDB.",
						"Implemented efficient state management using Recoil for better UX and performance.",
						"Integrated media upload and storage with Cloudinary for seamless asset handling.",
					].map((text, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}>
							{text}
						</motion.li>
					))}
				</ul>
			</div>

			{/* Skills Section */}
			<div className="mt-12 w-full max-w-5xl">
				<Skills />
			</div>
		</div>
	);
};

export default About;
