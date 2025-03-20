import Link from "next/link";

const experiences = [
	{
		role: "Frontend Developer | Freelance",
		duration: "June 2024 - Present",
		description: [
			"Led the Frontend Development: Directed the creation of the frontend for Rolan Plast's web applications.",
			"Technologies Used: Utilized React.js, Recoil, and Tailwind CSS.",
			"Enhanced User Experience: Integrated Framer Motion for smooth animations.",
		],
		link: "https://rolanplast.netlify.app/",
	},
	{
		role: "Intern | Entri Elevate (MERN Stack)",
		duration: "March 2024 - June 2024",
		description: [
			"Worked on HexVibe: Developed an Instagram-inspired application with Next.js, Express.js, and MongoDB.",
			"Responsibilities: Implemented user authentication, posts, and real-time interactions.",
			"Technologies Used: Next.js, Express.js, MongoDB, Recoil, and Tailwind CSS.",
		],
		link: "https://hexvibe.vercel.app/",
	},
];

const Experience = () => {
	return (
		<section className="bg-[#0d0d0d] text-white py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 text-transparent bg-clip-text mb-4">
					Experience
				</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div key={index} className="border border-purple-600 p-6 text-left">
							<h3 className="text-xl font-semibold text-white">{exp.role}</h3>
							<p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
							<ul className="list-disc list-inside text-gray-300">
								{exp.description.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
							<Link
								href={exp.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-500 hover:text-purple-400 block mt-3">
								View Project →
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
