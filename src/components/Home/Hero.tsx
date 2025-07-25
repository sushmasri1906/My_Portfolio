"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

interface HeroProps {
	profileImage: string;
}

const Hero = ({ profileImage }: HeroProps) => {
	return (
		<section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-12 py-12 min-h-screen">
			<div className="w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 text-center lg:text-left max-w-6xl mx-auto">
				<motion.div
					className="w-full lg:w-3/5"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
						I&apos;m <span className="text-purple-500">Sushmasri Kamera</span>
					</h1>
					<h2 className="mt-3 text-purple-400 text-lg sm:text-xl md:text-2xl font-medium">
						<Typewriter
							words={[
								"MERN Stack Developer",
								"React Specialist",
								"Next.js Expert",
							]}
							loop
							cursor
							cursorStyle="|"
							typeSpeed={80}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</h2>
					<p className="mt-4 text-white text-base md:text-lg leading-relaxed">
						Passionate MERN stack developer skilled in Tailwind CSS, building
						seamless web experiences with modern technologies like React,
						Next.js, Node.js, and MongoDB.
					</p>

					<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<motion.div whileHover={{ scale: 1.05 }}>
							<Link
								href="mailto:sushmasri1906@gmail.com"
								className="px-6 py-2 text-sm sm:text-base rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all shadow-md">
								Contact Me
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Link
								href="/assets/SushmaSri_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 text-sm sm:text-base rounded-full bg-white text-purple-600 font-medium hover:bg-gray-100 transition-all shadow-md">
								Download Resume
							</Link>
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					className="w-full lg:w-2/5 flex justify-center"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}>
					<Image
						src={profileImage}
						alt="Sushmasri Kamera profile picture"
						width={250}
						height={250}
						priority
						className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-cover rounded-full border-2 border-purple-500 shadow-lg shadow-purple-600"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
