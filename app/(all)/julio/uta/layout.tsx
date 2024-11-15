import { Navbar } from "@/components/navbar/navbar";
import { NavbarPrueba } from "@/components/navbar/navbarHoverPrueba";

export default function UtaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			// <div className="inline-block max-w-lg text-center justify-center">
			<section className="bg-lowgray">
				<NavbarPrueba/>
				{/* <Navbar/> */}
				<div>
				{children}
			</div>
		</section>
	);
}
