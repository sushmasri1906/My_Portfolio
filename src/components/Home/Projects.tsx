"use client";

import EachProject from "./EachProject";

const projects = [
	{
		id: 1,
		title: "Jaaaga Coworking Space Website",
		description: `
			● Developed a modern coworking space platform using Next.js and TypeScript, featuring a dynamic gallery and workspace sections.
			● Integrated Sanity CMS to allow easy content management, enabling real-time updates for workspace details, images, and pricing.
			● Designed a responsive interface using Tailwind CSS, ensuring optimal user experience across desktop, tablet, and mobile devices.
			● Utilized Framer Motion for smooth animations and transitions, enhancing the overall user experience and interaction.
			● Optimized website performance with Next.js's static site generation for fast load times and better SEO.
			● Provided an admin interface to manage content, including workspace details, images, and availability, directly from the CMS.`,
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Sanity CMS",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
		link: "https://www.jaaaga.com/",
	},
	{
		id: 2,
		title: "WEN - Women Entrepreneurs Network",
		category: "Community Platform",
		description: `
		● Developed a vibrant and inclusive platform to empower women entrepreneurs through networking, mentorship, and global visibility.
		● Integrated Sanity CMS for seamless content management, enabling dynamic updates to events, blogs, and gallery sections.
		● Implemented dedicated modules for community events and blog posts, allowing for real-time content publishing.
		● Designed a dynamic image gallery to showcase community highlights and success stories.
		● Built with Next.js and Tailwind CSS for fast, responsive, and accessible user experience across devices.
		● Enhanced interactivity and polish using Framer Motion and React Icons for intuitive UI feedback.
	`,
		technologies: [
			"Next.js",
			"Tailwind CSS",
			"React Icons",
			"Framer Motion",
			"Sanity CMS",
			"Responsive Design",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1744710608/Screenshot_2025-04-15_151906_w836vq.png",
		link: "https://www.bizwen.site/",
	},
	{
		id: 2,
		title: "Biz Timer – Business Networking Session Timer",
		description: `
		● Built a clean and responsive timer app specifically tailored for structured business networking sessions using Next.js and TypeScript.
		● Designed to support Biz-Network® formats with predefined agenda blocks like Self Introduction, Business Presentation, and Business Education.
		● Integrated intuitive controls for start, pause, reset, and real-time session management with bell alerts at session ends.
		● Implemented editable timer blocks with a modular and user-friendly interface for moderators and event hosts.
		● Optimized for desktop, tablet, and mobile views using Tailwind CSS for a seamless experience across all screen sizes.
		● Utilized Framer Motion and Lucide Icons for smooth animations and a polished UI feel.
		● Deployed on Vercel with static generation for lightning-fast load times, and structured for future scalability via modular component design.
		● Currently in use by internal Biz-Network® teams, with flexibility to adapt across various group-based or timed collaboration formats.`,
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Lucide Icons",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1747998268/Screenshot_2025-05-23_163334_vua8vh.png",
		link: "https://www.biztimer.site/",
	},

	{
		id: 3,
		title: "Biz-Network",
		category: "B2B Networking Platform",
		description: `
		● Developed the frontend of a robust B2B networking platform using Next.js within a Turborepo monorepo architecture.
		● Integrated RESTful APIs and implemented form validation using Zod for a secure and type-safe user experience.
		● Collaborated on backend logic using Node.js and Prisma ORM to manage relational data efficiently.
		● Implemented responsive UI with Tailwind CSS and used React Toastify for real-time feedback and notifications.
		● Ensured high performance and maintainability through modular architecture and clean code practices.
	`,
		technologies: [
			"Next.js",
			"Node.js",
			"Prisma ORM",
			"Zod",
			"Turborepo",
			"Tailwind CSS",
			"React Toastify",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
		link: "https://www.bizn.in/",
	},
	{
		id: 4,
		title: "Rolan Plast Business Website",
		category: "Corporate Website",
		description: `
		● Developed a responsive and modern frontend website for a plastic manufacturing company to showcase its products and services.
		● Built with React.js and Tailwind CSS to ensure fast performance, clean design, and cross-device compatibility.
		● Integrated smooth animations using Framer Motion to enhance user interaction and visual appeal.
		● Utilized component-based architecture for scalable and maintainable code structure.
	`,
		technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742141216/Screenshot_2025-03-16_213636_ezv4a4.png",
		link: "https://rolanplast.netlify.app/",
	},
	{
		id: 5,
		title: "Independence Day Theme Website",
		category: "Themed Frontend Project",
		description: `
		● Designed and developed a visually engaging website to celebrate Independence Day with rich colors and patriotic themes.
		● Implemented a dynamic hero banner with a live countdown timer to the celebration date.
		● Created an interactive carousel showcasing freedom fighters, along with a responsive image gallery.
		● Built using HTML, CSS, JavaScript, and Tailwind CSS for styling, with Framer Motion adding smooth animations and transitions.
	`,
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
		id: 6,
		title: "HexMusic Streaming App",
		category: "Music Streaming Platform",
		description: `
		● Developed a full-featured music streaming platform, offering real-time playback and seamless navigation.
		● Integrated Spotify API to provide users with access to a vast library of music, artist, and album pages.
		● Implemented a track preview feature for quick listening, along with dynamic search and real-time updates.
		● Utilized Next.js for server-side rendering, ensuring fast page loads and improved SEO.
		● Styled with Tailwind CSS for responsive and modern design, and used Zustand for efficient state management.
		● Incorporated React Icons for a polished UI and intuitive user experience.
	`,
		technologies: [
			"Next.js",
			"Tailwind CSS",
			"Zustand",
			"Spotify API",
			"React Icons",
		],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1743833975/Screenshot_2025-04-05_114712_qfzldq.png",
		link: "https://hex-music.vercel.app/",
	},

	{
		id: 7,
		title: "E-Commerce Platform",
		category: "E-Commerce Website",
		description: `
		● Developed a scalable eCommerce platform with a focus on product listings, cart management, and seamless checkout flow.
		● Implemented dynamic product display with filters and sorting options to enhance user browsing experience.
		● Integrated cart management and payment gateway for smooth transactions and user interaction.
		● Styled the platform using Tailwind CSS for a modern, responsive layout that adapts across devices.
		● Utilized Recoil for state management, ensuring smooth interactions and updates across the platform.
		● Enhanced user experience with Framer Motion for animations and transitions throughout the site.
	`,
		technologies: ["React.js", "Tailwind CSS", "Recoil", "Framer Motion"],
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482225/Screenshot_2025-03-20_202010_bjofrz.png",
		link: "https://hexaclothes.netlify.app/",
	},
	{
		id: 8,
		title: "HexVibe Social Media App",
		category: "Full-Stack Social Media Platform",
		description: `
		● Developed a full-stack social media platform with real-time features such as posts, comments, and live updates.
		● Implemented user authentication and profile management using JWT for secure login and registration.
		● Built the backend with Express.js and integrated MongoDB for efficient data storage and retrieval.
		● Utilized Recoil for client-side state management, ensuring smooth interactions and state updates across the app.
		● Styled the platform using Tailwind CSS for a modern, responsive design across all devices.
		● Incorporated real-time features like live chat and notifications to enhance user engagement.
	`,
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
		<section className="pb-12 pt-4">
			<div className="container mx-auto sm:px-4">
				<h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
					Projects
				</h2>

				<div className="flex flex-col items-center gap-4">
					{projects.map((project, index) => (
						<EachProject key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
