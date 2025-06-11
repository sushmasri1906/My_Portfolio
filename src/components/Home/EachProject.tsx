"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

import InViewUp from "../../components/Home/InViewUp";

interface ProjectType {
	id: number;
	technologies: string[];
	title: string;
	description: string;
	image: string;
	link: string;
}

const EachProject = ({ project }: { project: ProjectType }) => {
	const [extend, setExtend] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | "auto">(0);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(extend ? contentRef.current.scrollHeight : 50);
		}
	}, [extend]);

	return (
		<div className="bg-gray-900 lg:w-[70%] flex flex-col items-center gap-x-2 border border-purple-400 shadow-lg transition-all p-4 rounded">
			<InViewUp>
				<a href={project.link} target="_blank" rel="noopener noreferrer">
					<Image
						src={project.image}
						alt={project.title}
						className="max-w-full h-fit cursor-pointer"
						width={1080}
						height={700}
					/>
				</a>

				<div className="p-6">
					<div className="flex justify-between items-center">
						<h3 className="sm:text-xl md:text-2xl font-semibold text-purple-500">
							{project.title}
						</h3>

						<div className="flex items-center justify-between gap-x-4 ml-4">
							<a
								target="_blank"
								href={project.link}
								className="block text-purple-700 hover:text-purple-700">
								<FaExternalLinkAlt className="h-4 w-4 md:h-5 md:w-5" />
							</a>
							{/* <a
								target="_blank"
								href={project.gitLink}
								className="block text-purple-700 hover:text-purple-700">
								<IoLogoGithub className="h-6 w-6" />
							</a> */}
						</div>
					</div>
					<div className="flex flex-wrap gap-2 my-2">
						{project.technologies.map((tech, index) => (
							<span
								key={index}
								className="text-xs sm:text-sm font-semibold text-white bg-purple-800 px-2 py-1 rounded-full">
								{tech}
							</span>
						))}
					</div>

					<div className="block">
						<p className="mt-2 block text-purple-700 hover:text-purple-500">
							Description
						</p>
						<div className="relative text-white">
							<AnimatePresence initial={false}>
								<motion.div
									style={{ overflow: "hidden" }}
									animate={{ height }}
									transition={{ duration: 0.5, ease: "easeInOut" }}>
									<div ref={contentRef}>
										{Array.isArray(project.description)
											? project.description.map((line, i) => (
													<span key={i}>
														{line}
														<br />
													</span>
											  ))
											: project.description.split("\n").map((line, i) => (
													<span key={i}>
														{line}
														<br />
													</span>
											  ))}
									</div>
								</motion.div>
							</AnimatePresence>

							<div className="flex items-center justify-center">
								<motion.button
									onClick={() => setExtend((prev) => !prev)}
									className="flex gap-x-2 items-center text-center mt-2 text-purple-500 border-2 p-1 border-purple-400 px-4 rounded-full">
									{extend ? <p>Collapse</p> : <p>Expand</p>}
									{extend ? <BiUpArrow /> : <BiDownArrow />}
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</InViewUp>
		</div>
	);
};

export default EachProject;
