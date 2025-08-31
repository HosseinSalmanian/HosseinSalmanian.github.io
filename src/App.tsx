import { BrowserRouter, Route, Routes } from 'react-router';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Header from './components/Header';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className="md:mt-7.5">
					<Routes>
						<Route path="/" element={<Summary />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experiences" element={<Experiences />} />
						<Route path="/education" element={<Educations />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
