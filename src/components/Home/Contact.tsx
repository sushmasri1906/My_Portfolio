"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

// Cloudinary Image URL
const profileImageUrl =
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742405211/contact_sq1o4z.png";

const ContactUs = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center min-h h-screen justify-center gap-12 p-8 lg:p-16">
			{/* Contact Info Section */}
			<div className="text-center lg:text-left text-gray-200 space-y-6">
				<h2 className="text-3xl sm:text-4xl font-bold text-purple-600">
					Let&apos;s Connect
				</h2>
				<p className="text-lg text-gray-300">
					Feel free to reach out through any platform.
				</p>

				{/* Contact Links */}
				<div className="flex flex-col space-y-4">
					{[
						{
							icon: <MdEmail size={24} />,
							text: "sushmasri1906@gmail.com",
							link: "mailto:sushmasri1906@gmail.com",
						},
						{
							icon: <FaGithub size={24} />,
							text: "github.com/sushmasri1906",
							link: "https://github.com/sushmasri1906",
						},
						{
							icon: <FaLinkedin size={24} />,
							text: "linkedin.com/in/sushmasri19",
							link: "https://www.linkedin.com/in/sushmasri19",
						},
						{
							icon: <MdPhone size={24} />,
							text: "+91 8919624323",
							link: "tel:+918919624323",
						},
						{
							icon: <MdLocationOn size={24} />,
							text: "Hyderabad, India",
							link: "https://maps.google.com",
						},
					].map((item, index) => (
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							key={index}
							className="flex items-center space-x-3 p-4 border border-purple-600 backdrop-blur-md  shadow-lg transition">
							<span className="text-purple-600">{item.icon}</span>
							<Link href={item.link} target="_blank">
								<span className="text-white text-md font-medium">
									{item.text}
								</span>
							</Link>
						</motion.div>
					))}
				</div>
			</div>

			{/* Profile Image with Animated Gradient */}
			<div className="relative p-1">
				<div className="absolute -z-0 flex justify-center items-center top-12 left-10 w-64 h-64 rounded-full border-4 border-dotted border-white animate-spin-slow">
					<div className="w-56 h-56 rounded-full animate-spin-slow bg-gradient-to-r from-purple-600 to-purple-700" />
				</div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}>
					<Image
						src={profileImageUrl}
						alt="Profile"
						width={256}
						height={256}
						className="w-64 h-auto relative z-10 rounded-full"
						priority
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactUs;
