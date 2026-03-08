import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="w-full py-24 bg-white">
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-700 mb-6">
					Event Management
					<ArrowUpRight size={16} />
				</div>

				{/* Heading */}
				<h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
					Modern Event <br />
					Management Platform
				</h1>

				{/* Description */}
				<p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
					Learn how to build a real-world event management application
					using Next.js, TypeScript, and MongoDB from project setup to
					CRUD operations and scalable architecture.
				</p>

				{/* Buttons */}
				<div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
					<Link
						href="/events"
						className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
					>
						Browse Events
						<ArrowUpRight size={18} />
					</Link>

					<Link
						href="/create-event"
						className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
					>
						<Calendar size={18} />
						Create Event
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
