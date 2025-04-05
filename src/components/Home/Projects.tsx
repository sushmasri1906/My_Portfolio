"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
	{
		id: 1,
		title: "HexMusic Streaming App",
		description:
			"A full-featured music streaming platform with real-time playback, artist and album pages, track previews, and Spotify API integration.",
		technologies: [
			"Next.js",
			"Tailwind CSS",
			"Zustand",
			"Spotify API",
			"React Icons",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1743833975/Screenshot_2025-04-05_114712_qfzldq.png", // Replace with actual image if needed
		link: "https://hex-music.vercel.app/",
	},

	{
		id: 2,
		title: "Jaaaga Coworking Space Website",
		description:
			"A modern coworking space website built with Next.js and TypeScript, featuring interactive UI elements.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
		link: "https://www.jaaaga.com/",
	},
	{
		id: 3,
		title: "Independence Day Theme Website",
		description:
			"Celebrates Independence Day with vibrant colors and historical elements. Features a freedom fighters carousel, Hero Banner with a countdown, and a Gallery.",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Tailwind CSS",
			"Framer Motion",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481857/Screenshot_2025-03-20_201322_tt7msa.png",
		link: "https://independence78.netlify.app/",
	},
	{
		id: 4,
		title: "Biz-Network",
		description:
			"A powerful business-to-business networking platform enabling seamless connections and collaborations among professionals and organizations.",
		technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Recoil"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
		link: "https://www.bizn.in/",
	},
	{
		id: 5,
		title: "Rolan Plast Business Website",
		description:
			"A dynamic website for a plastic manufacturing company, featuring a responsive UI and smooth animations.",
		technologies: ["React.js", "Tailwind CSS", "Recoil", "Framer Motion"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742141216/Screenshot_2025-03-16_213636_ezv4a4.png",
		link: "https://rolanplast.netlify.app/",
	},

	{
		id: 6,
		title: "E-Commerce Platform",
		description:
			"A scalable eCommerce platform with product listings, cart management, and payment integration.",
		technologies: ["React.js", "Tailwind CSS", "Recoil", "Framer Motion"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482225/Screenshot_2025-03-20_202010_bjofrz.png",
		link: "https://hexaclothes.netlify.app/",
	},
	{
		id: 7,
		title: "HexVibe Social Media App",
		description:
			"A full-stack social media platform with user authentication, profile management, and real-time features.",
		technologies: [
			"Next.js",
			"Express.js",
			"MongoDB",
			"Recoil",
			"Tailwind CSS",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742141093/Screenshot_2025-03-16_213423_pzqbep.png",
		link: "https://hexvibe.vercel.app/",
	},
];
const Projects = () => {
	return (
		<section className="bg-[#0d0d0d] text-white py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-transparent bg-clip-text mb-4">
					Projects
				</h2>
				<p className="text-gray-400 text-lg mb-12">
					I have worked on a wide range of projects, focusing on frontend and
					backend development. Here are some highlights.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="relative border border-purple-600 rounded-2xl p-4 flex flex-col transition-transform duration-300 hover:scale-105"
							whileHover={{ scale: 1.05 }}>
							<div className="overflow-hidden ">
								<Image
									src={project.image}
									alt={project.title}
									width={600}
									height={300}
									className="w-full h-56 border border-white rounded-2xl p-1 object-fit"
								/>
							</div>

							{/* Content */}
							<h3 className="text-xl  text-center font-semibold mt-4">
								{project.title}
							</h3>
							<p className="text-gray-400 text-sm mt-2">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2 mt-4 ">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
										{tech}
									</span>
								))}
							</div>

							<div className="mt-4 flex justify-between items-center">
								<a
									target="_blank"
									href={project.link}
									className="text-purple-500 hover:text-purple-400 transition flex items-center gap-1">
									View Project →
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;