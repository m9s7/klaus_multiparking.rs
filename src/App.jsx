import { Navbar } from './components';
import { HidraulicniSistemi_Naslovna } from './pages';
import { MultiBase2072i } from './pages';
import { MultiBase2078i } from './pages';
import { MultiBase2042 } from './pages';
import { MultiBaseG63 } from './pages';
import { MultiBaseU10 } from './pages';
import { MultiBaseU20 } from './pages';
import { SingleVario2061 } from './pages';
import { MultiBase2072iOutdoor } from './pages';
import { MultiBaseG63Outdoor } from './pages';
import { SingleVario2061Outdoor } from './pages';
import { MultiBase2072iSpecial } from './pages';

import { PoluautomaticNaslovna } from './pages';
import { ParkBoardPE } from './pages';
import { ParkBoardPH } from './pages';
import { ParkBoardPQ } from './pages';
import { ParkDiscD450 } from './pages';
import { TrendVario6100 } from './pages';
import { TrendVario6100plus } from './pages';
import { TrendVario6200plus } from './pages';
import { TrendVario6300 } from './pages';
import { TrendVario6300plus } from './pages';
import { AutomatskiSistemiNaslovna } from './pages';
import { MasterVarioR2C } from './pages';
import { MasterVarioR2L } from './pages';
import { MasterVarioR3C } from './pages';
import { MasterVarioR3L } from './pages';
import { MasterVarioF2 } from './pages';

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
					<Route
						path="/MultiBase2072i"
						element={<MultiBase2072i />}
					/>
					<Route
						path="/MultiBase2078i"
						element={<MultiBase2078i />}
					/>
					<Route path="/MultiBase2042" element={<MultiBase2042 />} />
					<Route path="/MultiBaseG63" element={<MultiBaseG63 />} />
					<Route path="/MultiBaseU10" element={<MultiBaseU10 />} />
					<Route path="/MultiBaseU20" element={<MultiBaseU20 />} />
					<Route
						path="/SingleVario2061"
						element={<SingleVario2061 />}
					/>
					<Route
						path="/MultiBase2072iOutdoor"
						element={<MultiBase2072iOutdoor />}
					/>
					<Route
						path="/MultiBaseG63Outdoor"
						element={<MultiBaseG63Outdoor />}
					/>
					<Route
						path="/SingleVario2061Outdoor"
						element={<SingleVario2061Outdoor />}
					/>
					<Route
						path="/MultiBase2072iSpecial"
						element={<MultiBase2072iSpecial />}
					/>

					<Route
						path="/PoluautomaticNaslovna"
						element={<PoluautomaticNaslovna />}
					/>
					<Route path="/ParkBoardPE" element={<ParkBoardPE />} />
					<Route path="/ParkBoardPH" element={<ParkBoardPH />} />
					<Route path="/ParkBoardPQ" element={<ParkBoardPQ />} />
					<Route path="/ParkDiscD450" element={<ParkDiscD450 />} />
					{/* Poluautomacki Sistemi */}
					<Route
						path="/TrendVario6100"
						element={<TrendVario6100 />}
					/>
					<Route
						path="/TrendVario6100plus"
						element={<TrendVario6100plus />}
					/>
					<Route
						path="/TrendVario6200plus"
						element={<TrendVario6200plus />}
					/>
					<Route
						path="/TrendVario6300"
						element={<TrendVario6300 />}
					/>
					<Route
						path="/TrendVario6300plus"
						element={<TrendVario6300plus />}
					/>
					{/* Automacki Sistemi */}
					<Route
						path="/AutomatskiSistemi"
						element={<AutomatskiSistemiNaslovna />}
					/>
					<Route
						path="/MasterVarioR2C"
						element={<MasterVarioR2C />}
					/>
					<Route
						path="/MasterVarioR2L"
						element={<MasterVarioR2L />}
					/>
					<Route
						path="/MasterVarioR3C"
						element={<MasterVarioR3C />}
					/>
					<Route
						path="/MasterVarioR3L"
						element={<MasterVarioR3L />}
					/>
					<Route path="/MasterVarioF2" element={<MasterVarioF2 />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
