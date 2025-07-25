import Hero from "@/components/Home/Hero";
import React from "react";
import About from "@/components/Home/About";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Home/Awards";
import ContactUs from "@/components/Home/Contact";

function page() {
	return (
		<>
			<Hero profileImage="https://res.cloudinary.com/dgulr1hgd/image/upload/v1742405197/pi_qsgdmq.png" />
			<Experience />
			<Projects />
			<About />
			<Certifications />
			<Awards />
			<ContactUs />
		</>
	);
}

export default page;
