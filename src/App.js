import React from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	return (
		<div className='App'>
			<div>
				App
				<Sidebar />
			</div>
		</div>
	);
};

export default App;
