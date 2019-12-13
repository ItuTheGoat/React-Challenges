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
	padding: "10px"
};

const App = () => {
	return (
		<div>
			<h2 className='ui center aligned header' style={myStyle}>
				Choose Your Tool
			</h2>

			<div className='container ui grid'>
				<Sidebar />

				<div className='twelve wide stretched column'>
					<div className='ui segment'>
						<Route exact path='/' component={Home} />
						<Route path='/convertTime' component={TimeConverter} />
						<Route path='/findLongestWord' component={LongestWord} />
						<Route path='/changeLetters' component={LetterChanger} />
						<Route path='/factorials' component={Factorials} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
