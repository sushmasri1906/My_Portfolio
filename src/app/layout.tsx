import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sushma Sri | Full Stack Developer",
	description:
		"Portfolio of Sushma Sri — Full Stack Developer specializing in modern web applications and clean, scalable solutions.",
	metadataBase: new URL("https://sushmasri.vercel.app"),
	keywords: [
		"Sushma Sri",
		"Full Stack Developer",
		"Next.js",
		"React",
		"Portfolio",
	],
	openGraph: {
		title: "Sushma Sri | Full Stack Developer",
		description:
			"Discover the portfolio of Sushma Sri — showcasing projects built with Next.js, React, Node.js, and more.",
		url: "https://sushmasri.vercel.app",
		siteName: "Sushma Sri Portfolio",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="px-1 sm:px-8 md:px-16 lg:px-20  bg-[#0f0f0f]">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
