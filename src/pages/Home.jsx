import React from 'react';
import Hero from '../component/Hero';
import Message from '../component/Message';
import Navbar from '../component/Navbar';
import Question from '../component/Question';
import { Fotter } from '../component/Fotter';
const Home = () => {
	return (
		<section>
			<Navbar></Navbar>
			<Hero></Hero>
			<Message></Message>
      		<Question></Question>
	  <Fotter></Fotter>
		</section>
	);
};

export default Home;
