import Link from "next/link";

const experiences = [
	{
		role: "Full Stack Developer | Biz-Link Pvt Ltd",
		duration: "Feb 2025 - Present",
		description: [
			"Created a custom coworking space platform from scratch.",
			"Built and maintained the main website for clients.",
			"Built an admin dashboard (CMS) using Sanity for easy content management.",
			"Currently working on fullstack projects using Next.js and Prisma.",
			"Tech Stack: Next.js, Tailwind CSS, Sanity, Cloudinary, Prisma.",
		],
	},
	{
		role: "Frontend Developer | Freelance",
		duration: "June 2024 - Feb 2025",
		description: [
			"Directed the creation of the frontend for Rolan Plast's web apps.",
			"Used React.js, Recoil, and Tailwind CSS.",
			"Added Framer Motion for smooth user experience.",
		],
		link: "https://rolanplast.netlify.app/",
	},
	{
		role: "Intern | Entri Elevate (MERN Stack)",
		duration: "March 2024 - June 2024",
		description: [
			"Built HexVibe – an Instagram-style app using Next.js and MongoDB.",
			"Added features like login, posts, and real-time updates.",
			"Used Next.js, Express.js, MongoDB, Recoil, Tailwind CSS.",
		],
		link: "https://hexvibe.vercel.app/",
	},
];

const Experience = () => {
	return (
		<section className="text-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="w-full mx-auto text-center">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 text-transparent bg-clip-text mb-10">
					Experience
				</h2>
				<div className="w-full mx-auto lg:w-3/4 xl:w-[900px] space-y-6">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="border border-purple-600 p-5 sm:p-6 rounded-lg text-left shadow-md shadow-purple-800/20 bg-[#111]">
							<h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
								{exp.role}
							</h3>
							<p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
							<ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
								{exp.description.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
							{exp.link && (
								<Link
									href={exp.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-purple-400 hover:text-purple-300 inline-block mt-3 text-sm font-medium">
									View Project →
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
