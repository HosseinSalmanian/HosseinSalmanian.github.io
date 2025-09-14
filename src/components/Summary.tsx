import ProfilePicture from './ProfilePicture';

function Summary() {
	return (
		<>
			<section className="flex flex-col items-stretch gap-1 md:flex-row">
				<ProfilePicture />
				<div className="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 md:ml-4 dark:bg-gray-800">
					<h3 className="mt-5 font-medium tracking-tight text-orange-400">
						Professional Summary
					</h3>
					<p className="mt-2 text-gray-500 dark:text-gray-400">
						Experienced software developer with over 15 years of hands-on
						experience building scalable applications and leading front-end
						teams. Skilled in collaborating with cross-functional teams,
						mentoring developers, and fostering a culture of knowledge sharing.
						Proven track record in designing and developing complex systems,
						modernizing legacy codebases, and implementing efficient team
						processes. Passionate about delivering high-quality software that
						drives business value and simplifies user experiences.
					</p>
				</div>
			</section>
		</>
	);
}

export default Summary;
