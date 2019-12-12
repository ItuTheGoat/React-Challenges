import React from "react";
import Sidebar from "./components/sidebar";
import { Route } from "react-router-dom";
import TimeConverter from "./components/timeConvert";
import Home from "./components/home";
import LongestWord from "./components/longestWord";
import LetterChanger from "./components/letterChanger";
import Factorials from "./components/factorials";
import "./index.css";

const myStyle = {
	float: "left"
};
const myStyle2 = {
	float: "right"
};

const App = () => {
	return (
		<div>
			<div className='container ui grid' style={myStyle}>
				<div class='row'>
					<Sidebar />
				</div>
				<div class='row'>
					<div className='right floated left aligned six wide column'>Home</div>
					<Route exact path='/' component={Home} />
					<Route path='/convertTime' component={TimeConverter} />
					<Route path='/findLongestWord' component={LongestWord} />
					<Route path='/changeLetters' component={LetterChanger} />
					<Route path='/factorials' component={Factorials} />
				</div>
			</div>
		</div>
	);
};

export default App;
