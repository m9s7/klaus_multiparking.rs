import { Navbar } from './components';
import { HidraulicniSistemi_Naslovna } from './pages';
import { MultiBase2072i } from './pages';
import ScrollToTop from './utils/ScrollToTop';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-transparent">
			<Navbar />
			<Router>
				<ScrollToTop />
				{/* <Link to="/">HidraulicniSistemi_Naslovna</Link> */}
				{/* <Link to="/MultiBase2072i">MultiBase2072i</Link> */}
				<Routes>
				<Route path="/" element={<HidraulicniSistemi_Naslovna />} />
				<Route path="/MultiBase2072i" element={<MultiBase2072i />} />
				</Routes>
			</Router>
		</div>
	);
  };

export default App;
