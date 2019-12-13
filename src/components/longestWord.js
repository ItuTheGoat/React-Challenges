import React, { Component } from "react";
import CalcForm from "./calcForm";

class LongestWord extends Component {
	information = {
		headerInfo: "Longest Word",
		description:
			"Enter a sentence and this tool will find the longest paragraph"
	};

	render() {
		return (
			<CalcForm
				id='longestWord'
				headerInfo={this.information.headerInfo}
				description={this.information.description}
				label='Enter Sentence'
				inputName='sentence'
				placeholder='Enter sentence'
				btnText='Find'
			/>
		);
	}
}

export default LongestWord;
