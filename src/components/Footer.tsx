"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
	{
		href: "https://github.com/sushmasri1906",
		label: "GitHub",
		icon: <FaGithub size={24} />,
		color: "text-gray-800 hover:text-purple-600",
	},
	{
		href: "https://linkedin.com/in/sushmasri19",
		label: "LinkedIn",
		icon: <FaLinkedin size={24} />,
		color: "text-blue-700 hover:text-purple-600",
	},
	{
		href: "https://x.com/sushmasri",
		label: "Twitter",
		icon: <FaTwitter size={24} />,
		color: "text-blue-500 hover:text-purple-600",
	},
	{
		href: "https://facebook.com/YourFacebookProfile",
		label: "Facebook",
		icon: <FaFacebook size={24} />,
		color: "text-blue-600 hover:text-purple-600",
	},
];

const quickLinks = [
	{ href: "/", text: "Home" },
	{ href: "/experience", text: "Experience" },
	{ href: "/about", text: "About Me" },
	{ href: "/projects", text: "Projects" },
	{ href: "/contact", text: "Contact" },
];

const Footer: React.FC = () => {
	return (
		<footer className="relative bg-[#0f0f0f] text-white py-10  border-t border-purple-600 backdrop-blur-md bg-opacity-90 shadow-lg text-center animate-fade-in">
			{/* Social Media Links */}
			<h2 className="text-2xl text-purple-500 font-semibold mb-4">
				Connect with Me
			</h2>
			<div className="flex justify-center space-x-6 mb-8">
				{socialLinks.map(({ href, label, icon, color }) => (
					<Link
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className={`p-3 bg-white rounded-full shadow-md transition-transform transform hover:scale-110 ${color}`}>
						{icon}
					</Link>
				))}
			</div>

			{/* Quick Links */}
			<h2 className="text-2xl text-purple-500 font-semibold mb-4">
				Quick Links
			</h2>
			<div className="flex flex-wrap justify-center gap-6 mb-8">
				{quickLinks.map(({ href, text }) => (
					<Link
						key={text}
						href={href}
						className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:-translate-y-1">
						{text}
					</Link>
				))}
			</div>

			{/* Contact Information */}
			<h2 className="text-2xl text-purple-500 font-semibold mb-4">
				Contact Information
			</h2>
			<p className="text-gray-300">
				Email:{" "}
				<Link
					href="mailto:sushmasri1906@gmail.com"
					className="hover:text-purple-500 transition">
					sushmasri1906@gmail.com
				</Link>
			</p>
			<p className="text-gray-300">
				Phone:{" "}
				<Link
					href="tel:+918919624323"
					className="hover:text-purple-500 transition">
					+91 8919624323
				</Link>
			</p>

			{/* Back to Top Button */}
			<div className="mt-8">
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 text-white font-semibold shadow-lg">
					Back to Top
				</button>
			</div>

			{/* Footer Bottom Text */}
			<p className="text-sm mt-8 text-gray-400">
				&copy; {new Date().getFullYear()} Sushmasri. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
