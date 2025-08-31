type SkillCategory = { title: string; skills: string[]; icons?: string[] };

function Icons(props: { icons?: string[] }) {
	const icons = props.icons || [];
	return (
		icons.length > 0 && (
			<div className="flex gap-0.5">
				{props.icons?.map((icon) => (
					<img
						className="max-w-8 md:max-w-40"
						alt={icon}
						key={icon}
						title={icon}
						src={`https://skillicons.dev/icons?theme=light&i=${icon}`}
					/>
				))}
			</div>
		)
	);
}

function SkillCategory(props: SkillCategory) {
	return (
		<div className="mb-4 rounded-lg bg-white px-6 py-4 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
			<div className="mb-4 flex justify-between">
				<h4 className="font-semibold text-orange-400">{props.title}</h4>
				<Icons icons={props.icons} />
			</div>
			<ul className="list-inside list-disc text-sm text-gray-500 md:flex-row dark:text-gray-400">
				{props.skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
}

function Skills() {
	const categories: SkillCategory[] = [
		{
			title: 'Front-End',
			skills: [
				'TypeScript, JavaScript (ES6+)',
				'Angular (v2+ to v18), RxJS, NgRx',
				'SCSS/SASS, HTML5, CSS3',
				'Tailwind, Bootstrap, PrimeNG, jQuery',
				'Webpack, Module Federation, NX, Mono-repo',
			],
			icons: [
				'html',
				'css',
				'sass',
				'js',
				'ts',
				'angular',
				'rxjs',
				'tailwind',
				'webpack',
			],
		},
		{
			title: 'Back-End',
			skills: [
				'C#, ASP.NET Core, ASP.NET MVC',
				'Entity Framework, REST APIs, SignalR',
			],
			icons: ['cs', 'dotnet'],
		},
		{
			title: 'Tools & DevOps',
			skills: [
				'Git, GitHub, TFS, NPM, NuGet, Docker',
				'Jira, Scrum, Husky, ESLint, Jest',
			],
			icons: ['git', 'github', 'npm', 'docker', 'jest'],
		},
	];

	return (
		<>
			<section>
				<h3 className="font-medium tracking-tight text-orange-400">Skills</h3>
				<div className="mt-2 flex flex-col">
					{categories.map((category) => (
						<SkillCategory key={category.title} {...category} />
					))}
				</div>
			</section>
		</>
	);
}

export default Skills;
