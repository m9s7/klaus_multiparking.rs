import { Navbar } from './components';
import { HidraulicniSistemi_Naslovna } from './pages';
import { MultiBase2072i } from './pages';
import { MultiBase2078i } from './pages'
import { MultiBase2042 } from './pages'
import { MultiBaseG63 } from './pages'
import { MultiBaseU10 } from './pages'
import { MultiBaseU20 } from './pages'
import { SingleVario2061 } from './pages'
import { MultiBase2072iOutdoor } from './pages'
import { MultiBaseG63Outdoor } from './pages'
import { SingleVario2061Outdoor } from './pages'
import { MultiBase2072iSpecial } from './pages'

import ScrollToTop from './utils/ScrollToTop';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-transparent">
			<Router>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HidraulicniSistemi_Naslovna />} />
					<Route path="/MultiBase2072i" element={<MultiBase2072i />} />
					<Route path="/MultiBase2078i" element={<MultiBase2078i />} />
					<Route path="/MultiBase2042" element={<MultiBase2042 />} />
					<Route path="/MultiBaseG63" element={<MultiBaseG63 />} />
					<Route path="/MultiBaseU10" element={<MultiBaseU10 />} />
					<Route path="/MultiBaseU20" element={<MultiBaseU20 />} />
					<Route path="/SingleVario2061" element={<SingleVario2061 />} />
					<Route path="/MultiBase2072iOutdoor" element={<MultiBase2072iOutdoor />} />
					<Route path="/MultiBaseG63Outdoor" element={<MultiBaseG63Outdoor />} />
					<Route path="/SingleVario2061Outdoor" element={<SingleVario2061Outdoor />} />
					<Route path="/MultiBase2072iSpecial" element={<MultiBase2072iSpecial />} />

					
				</Routes>
			</Router>
		</div>
	);
  };

export default App;
