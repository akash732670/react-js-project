import MainHeader from './MainHeader';
import Cycles from './Cycles';
import About from './About';
import News from './News';
import Client from './Clients';
import ContactUs from './ContactUs';
import Footer from '../footer/Footer';
import { Fragment } from 'react';

function Home() {
  return (
	<Fragment>
		<MainHeader />
		<Cycles />
		<About />
		<Client />
		<News />
		<ContactUs />
		<Footer />
	</Fragment>
  );
}

export default Home;