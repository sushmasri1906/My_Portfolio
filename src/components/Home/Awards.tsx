import Image from "next/image";
import Link from "next/link";

const Awards = () => {
	const awards = [
		{
			title: "Independence Day Theme Frontend Website Award 2024",
			organization: "Entri Elevate",
			description:
				"Awarded for outstanding frontend development in a thematic web project.",
			year: "2024",
			image:
				"https://res.cloudinary.com/dgulr1hgd/image/upload/v1742482945/entri_nznslu.jpg",
			certificateLink: "#", // Replace with actual image URL
		},
	];

	return (
		<section className="text-center">
			<div className="  py-10 max-w-8xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-6 text-purple-600">Awards</h2>
				<div className="space-y-6 flex flex-col items-center">
					{awards.map((award, index) => (
						<div
							key={index}
							className="relative p-6 border border-purple-500   text-white  flex items-center w-full max-w-4xl">
							{/* Award Image */}
							<div className="flex-shrink-0">
								<Image
									src={award.image}
									alt={award.title}
									className="w-14 h-14 rounded-lg"
									height={56}
									width={56}
								/>
							</div>

							{/* Award Details */}
							<div className="ml-4 text-left">
								<h3 className="text-xl font-semibold">{award.title}</h3>
								<p className="text-sm text-gray-400">
									{award.year} | {award.organization}
								</p>
								<p className="mt-2 text-gray-300">{award.description}</p>
								<Link
									href={award.certificateLink}
									className="text-purple-500 hover:underline mt-2 inline-block">
									Certificate ↗
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
