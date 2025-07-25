"use client";

import React, { useState } from "react";
import {
	FiHome,
	FiUser,
	FiCode,
	FiMail,
	FiMenu,
	FiBriefcase,
} from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{ to: "/", label: "Home", icon: FiHome },
		{ to: "/experience", label: "Experience", icon: FiBriefcase },
		{ to: "/about", label: "About Me", icon: FiUser },
		{ to: "/projects", label: "Projects", icon: FiCode },
		{ to: "/contact", label: "Contact Me", icon: FiMail },
	];

	return (
		<nav className="p-4 bg-[#0f0f0f] text-white shadow-lg relative">
			<div className="mx-auto px-4 flex justify-between items-center">
				<div>
					<Link
						href="/"
						className="font-bold text-xl text-purple-500 tracking-wide">
						SushmaSri
					</Link>
				</div>
				<div className="hidden lg:flex items-center space-x-5">
					{navItems.map(({ to, label, icon: Icon }) => (
						<Link
							key={label}
							href={to}
							className="flex items-center gap-2 text-white hover:text-purple-500 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300">
							<Icon className="text-base" />
							<span>{label}</span>
						</Link>
					))}
				</div>
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-purple-500 focus:outline-none">
						<FiMenu className="text-xl" />
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="bg-[#0f0f0f] py-2 border-t border-gray-700 absolute top-full left-0 w-full shadow-md z-50">
						<div className="flex flex-col items-center space-y-2">
							{navItems.map(({ to, label, icon: Icon }) => (
								<Link
									key={label}
									href={to}
									className="flex items-center gap-2 text-white hover:text-purple-500 py-2 text-sm font-medium transition-all">
									<Icon className="text-base" />
									<span>{label}</span>
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
