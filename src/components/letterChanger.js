import React, { Component } from "react";
import CalcForm from "./calcForm";

class LetterChanger extends Component {
	infomation = {
		headerInfo: "Letter Changer",
		description:
			"Enter a word or sentence and this tool will make it weird. There is an algorithim though"
	};

	render() {
		return (
			<CalcForm
				id='LetterChanger'
				headerInfo={this.infomation.headerInfo}
				description={this.infomation.description}
				label='Enter Sentence'
				inputName='characters'
				placeholder='Enter here'
				btnText='DEVOLVE'
			/>
		);
	}
}

export default LetterChanger;
