import { useState } from 'react';
import { NavLink } from 'react-router';

function Header() {
	const [theme, setTheme] = useState('light');

	function toggleTheme(): void {
		setTheme((currnetTheme) => {
			const theme = currnetTheme === 'dark' ? 'light' : 'dark';
			document.getElementsByTagName('body')[0].classList.remove(currnetTheme);
			document.getElementsByTagName('body')[0].classList.add(theme);
			return theme;
		});
	}

	return (
		<>
			<header className="sticky top-0 z-10 -m-5 flex flex-col bg-white dark:bg-gray-950">
				<div className="mb-1 flex items-center justify-between p-4">
					<div className="m-auto">
						<nav>
							<ul className="flex *:text-orange-500 *:hover:text-orange-400 md:justify-between md:text-2xl">
								<li className="mx-1 underline">
									<NavLink to="/">About me</NavLink>
								</li>
								<li className="mx-1 underline">
									<NavLink to="skills">Skills</NavLink>
								</li>
								<li className="mx-1 underline">
									<NavLink to="experiences">Experiences</NavLink>
								</li>
								<li className="mx-1 underline">
									<NavLink to="education">Education</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<button
						className="h-10 w-10 cursor-pointer rounded-full bg-orange-500 text-white transition-colors duration-200 ease-in-out hover:bg-orange-400"
						onClick={toggleTheme}
						aria-label="Toggle dark mode"
					>
						{theme === 'dark' ? '☼' : '☾'}
					</button>
				</div>
				<div className="mb-4 text-center">
					<h1 className="mb-1 text-3xl font-bold text-orange-400">
						Hossein Salmanian
					</h1>
					<h2 className="text-orange-400"> Full-Stack Developer</h2>
				</div>
			</header>
		</>
	);
}

export default Header;
