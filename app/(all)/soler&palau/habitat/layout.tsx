export default function HabitatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<section>
			{/* <div className="inline-block max-w-lg text-center justify-center"> */}
			<div>
				{children}
			</div>
		</section>
	);
}
