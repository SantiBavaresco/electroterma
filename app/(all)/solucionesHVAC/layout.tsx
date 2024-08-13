import { Navbar } from "@/components/navbar/navbar";

export default function SolucionesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			// <div className="inline-block max-w-lg text-center justify-center">
			<section>
				<Navbar/>
				<div>
				{children}
			</div>
		</section>
	);
}
