"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const Header = () => {
	return (
		<header className="w-full border-b bg-white sticky top-0">
			<div className="mx-auto flex items-center justify-between px-6 py-4">
				{/* Left: Logo */}
				<div className="flex items-center gap-2">
					<CalendarDays className="w-5 h-5 text-gray-700" />
					<span className="font-semibold text-lg text-gray-800">
						Next Event
					</span>
				</div>

				{/* Center: Nav Links */}
				<nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
					<Link href="/" className="hover:text-black transition">
						Home
					</Link>
					<Link
						href="/events"
						className="hover:text-black transition"
					>
						Events
					</Link>
					<Link href="/about" className="hover:text-black transition">
						About
					</Link>
				</nav>

				{/* Right: Auth Buttons */}
				<div className="flex items-center gap-3">
					<Button variant="outline" size="lg">
						Login
					</Button>
					<Button size="lg">Sign Up</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
