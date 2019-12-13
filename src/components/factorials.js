import React, { Component } from "react";
import CalcForm from "./calcForm";

class Factorials extends Component {
	information = {
		headerInfo: "Get the Factorial of a number",
		description: "Enter in a number and get the factorial."
	};

	render() {
		return (
			<CalcForm
				id='factorials'
				headerInfo={this.information.headerInfo}
				description={this.information.description}
				label='Enter number'
				inputName='numInput'
				placeholder='E.g. 8, 56, 105'
				btnText='Calculate'
			/>
		);
	}
}

export default Factorials;
