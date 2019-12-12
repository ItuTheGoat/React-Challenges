import React from "react";
import Sidebar from "./components/sidebar";
import { Route } from "react-router-dom";
import TimeConverter from "./components/timeConvert";
import Home from "./components/home";
import LongestWord from "./components/longestWord";
import LetterChanger from "./components/letterChanger";
import Factorials from "./components/factorials";

const App = () => {
	return (
		<div className='container'>
			<Sidebar />
			Home
			<Route exact path='/' component={Home} />
			<Route path='/convertTime' component={TimeConverter} />
			<Route path='/findLongestWord' component={LongestWord} />
			<Route path='/changeLetters' component={LetterChanger} />
			<Route path='/factorials' component={Factorials} />
		</div>
	);
};

export default App;
