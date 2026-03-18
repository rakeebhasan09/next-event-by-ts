"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const Footer = () => {
	const fullYear = new Date().getFullYear();
	return (
		<footer className="bg-gray-50 border-t">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					{/* Logo + Description */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<CalendarDays className="w-5 h-5 text-gray-700" />
							<span className="font-semibold text-lg text-gray-800">
								Next Event
							</span>
						</div>
						<p className="text-sm text-gray-500">
							Modern Event Management Platform.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-medium text-gray-800 mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link
									href="/events"
									className="hover:text-black"
								>
									Events
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-black"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/pricing"
									className="hover:text-black"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="font-medium text-gray-800 mb-4">
							Resources
						</h4>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>
								<Link href="/blog" className="hover:text-black">
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/newsletter"
									className="hover:text-black"
								>
									Newsletter
								</Link>
							</li>
							<li>
								<Link
									href="/support"
									className="hover:text-black"
								>
									Support
								</Link>
							</li>
						</ul>
					</div>

					{/* Subscribe */}
					<div>
						<h4 className="font-medium text-gray-800 mb-4">
							Stay up to date
						</h4>
						<div className="flex items-center gap-2">
							<Input
								type="email"
								placeholder="Enter your email"
								className="h-9"
							/>
							<Button size="sm">Subscribe</Button>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
					<p>© {fullYear} UI Blocks. All rights reserved.</p>

					<div className="flex items-center gap-4">
						{/* Social Icons (placeholder) */}
						<span className="cursor-pointer hover:text-black">
							🌐
						</span>
						<span className="cursor-pointer hover:text-black">
							🐦
						</span>
						<span className="cursor-pointer hover:text-black">
							💬
						</span>
						<span className="cursor-pointer hover:text-black">
							🛒
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
