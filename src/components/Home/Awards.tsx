"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const awards = [
	{
		title: "Independence Day Theme Frontend Website Award 2024",
		organization: "Entri Elevate",
		description:
			"Awarded for outstanding frontend development in a thematic web project.",
		year: "2024",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482945/entri_nznslu.jpg",
		certificateLink:
			"https://drive.google.com/file/d/14PPilJjlXf8QY9RubPJ6szoyB241yw2Z/view?usp=sharing",
	},
];

const Awards = () => {
	return (
		<section className="bg-[#0d0d0d] text-white py-16 px-4 sm:px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 text-transparent bg-clip-text mb-8 text-center">
					Awards
				</h2>
				<div className="space-y-6 flex flex-col items-center">
					{awards.map((award, index) => (
						<motion.div
							key={index}
							className="relative p-4 sm:p-6 border border-purple-500 text-white flex flex-col sm:flex-row items-center sm:items-start w-full max-w-4xl shadow-md"
							whileHover={{ scale: 1.02 }}>
							{/* Award Image */}
							<div className="w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
								<Image
									src={award.image}
									alt={award.title}
									width={144}
									height={144}
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							{/* Award Details */}
							<div className="text-center sm:text-left mt-4 sm:mt-0 sm:ml-4">
								<h3 className="text-base sm:text-lg font-semibold">
									{award.title}
								</h3>
								<p className="text-gray-400 text-xs sm:text-sm mb-2">
									{award.year} | {award.organization}
								</p>
								<p className="text-gray-300 text-sm sm:text-base">
									{award.description}
								</p>
								<Link
									href={award.certificateLink}
									className="text-purple-500 hover:underline mt-2 inline-block text-sm sm:text-base">
									Certificate ↗
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
