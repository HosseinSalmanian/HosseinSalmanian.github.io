function Educations() {
	return (
		<>
			<section>
				<h3 className="font-medium tracking-tight text-orange-400">
					Education
				</h3>
				<div className="mb-8 flex flex-col gap-4 rounded-lg bg-white p-6 px-6 py-4 text-sm text-gray-500 shadow-md ring ring-gray-900/5 sm:flex-row sm:justify-between md:flex-row dark:bg-gray-800 dark:text-gray-400">
					<div>
						<p className="text-sm font-semibold">
							Bachelor of Science: <span>Software Engineering</span>, 2013
						</p>
					</div>
					<div>
						<h3 className="mb-2 text-lg font-bold">Languages</h3>
						<ul className="list-inside list-disc text-sm">
							<li>English</li>
							<li>Persian (Farsi)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Educations;
