import { useEffect } from 'react';
import { NavLink } from 'react-router';
import {
	toggle,
	currentTheme,
	previousTheme,
} from '../stores/theme/themeSlice';
import { useAppDispatch } from '../stores/store';
import { useSelector } from 'react-redux';

function Header() {
	const theme = useSelector(currentTheme);
	const prevTheme = useSelector(previousTheme);

	const dispatch = useAppDispatch();

	useEffect(() => {
		document.getElementsByTagName('body')[0].classList.remove(prevTheme);
		document.getElementsByTagName('body')[0].classList.add(theme);
	}, [theme, prevTheme]);

	const activeLinkClass = (e: { isActive: boolean }) => {
		return e.isActive ? 'underline' : '';
	};

	return (
		<>
			<header className="sticky top-0 z-10 m-5 flex flex-col bg-white dark:bg-gray-950">
				<div className="mb-1 flex items-center justify-between p-4">
					<nav className="m-auto">
						<ul className="flex *:text-orange-500 *:hover:text-orange-400 md:justify-between md:text-2xl">
							<li className="mx-1">
								<NavLink to="/" className={activeLinkClass}>
									About me
								</NavLink>
							</li>
							<li className="mx-1">
								<NavLink to="skills" className={activeLinkClass}>
									Skills
								</NavLink>
							</li>
							<li className="mx-1">
								<NavLink to="experiences" className={activeLinkClass}>
									Experiences
								</NavLink>
							</li>
							<li className="mx-1">
								<NavLink to="education" className={activeLinkClass}>
									Education
								</NavLink>
							</li>
						</ul>
					</nav>
					<button
						className="h-10 w-10 cursor-pointer rounded-full bg-orange-500 text-white transition-colors duration-200 ease-in-out hover:bg-orange-400"
						onClick={() => dispatch(toggle())}
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
