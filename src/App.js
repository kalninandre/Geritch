import React, { Fragment } from 'react';

import { Navbar } from './components';
import Header from './container/Header/Header';
import AboutUs from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';

import './App.css';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Header />
			<AboutUs />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</Fragment>
	);
};

export default App;
