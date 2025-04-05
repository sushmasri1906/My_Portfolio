"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const certifications = [
	{
		id: 1,
		title: "MERN Stack Developer | Trained At Entri Elevate Software Pvt Ltd",
		year: "2023 - 2024",
		description:
			"I successfully completed the MERN Full Stack Development course at Entri Elevate Software Pvt Ltd, where I gained hands-on experience in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. During the course, I worked on real-world projects that enhanced my skills in front-end and back-end development, RESTful API creation, authentication, database management, and deployment.",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482945/entri_nznslu.jpg",
		certificateLink:
			"https://drive.google.com/file/d/1tP3nOPo5pKUJXU4pjsbiX1xevoYh0xFQ/view?usp=drive_link",
	},
	{
		id: 2,
		title:
			"Full Stack Development (MERN Stack) – Illinois Institute Of Technology",
		year: "2023 - 2024",
		description:
			"I successfully earned the Full Stack Development (MERN Stack) certification from the Illinois Institute of Technology, showcasing my expertise in MongoDB, Express.js, React.js, and Node.js. This certification reflects my ability to develop dynamic, scalable web applications, implement RESTful APIs, manage databases, and build user-friendly interfaces. It highlights my commitment to continuous learning and staying updated with modern web technologies.",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482957/illinois_bvdbqe.png",
		certificateLink: "#",
	},
	{
		id: 3,
		title: "Internship At Entri Elevate Software Pvt Ltd",
		year: "Nov 2024",
		description:
			"I completed a one-month internship at Entri Elevate, where I gained hands-on experience in full-stack development. During this period, I built a social media application and a movie booking application, applying my skills in MongoDB, Express.js, React.js, and Node.js. This internship strengthened my ability to develop scalable web applications, integrate APIs, and enhance user experience through modern UI/UX practices.",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482945/entri_nznslu.jpg",
		certificateLink:
			"https://drive.google.com/file/d/1nsjeI0Sb6SAf7NNXkOZnXXgmMTfqvtXA/view?usp=drive_link",
	},
];

const Certifications = () => {
	return (
		<section className="bg-[#0d0d0d] text-white py-16 px-4 sm:px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 text-transparent bg-clip-text mb-8 text-center">
					Certifications
				</h2>

				<div className="space-y-6">
					{certifications.map((cert) => (
						<motion.div
							key={cert.id}
							className="border border-purple-600 p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-md"
							whileHover={{ scale: 1.02 }}>
							<div className="w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
								<Image
									src={cert.image}
									alt={cert.title}
									width={144}
									height={144}
									className="rounded-lg w-full h-full object-cover"
								/>
							</div>
							<div className="text-center sm:text-left">
								<h3 className="text-base sm:text-lg font-semibold">
									{cert.title}
								</h3>
								<p className="text-gray-400 text-xs sm:text-sm mb-2">
									{cert.year}
								</p>
								<p className="text-gray-300 text-sm sm:text-base">
									{cert.description}
								</p>
								<Link
									href={cert.certificateLink}
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

export default Certifications;
