import React from "react";
import CalcForm from "./calcForm";

class TimeConverter extends React.Component {
	state = {
		time: null,
		hours: null
	};

	TimeConvert(input) {
		//event.preventDefault();
		// Convert Minutes to Hours
		let hours = input / 60;
		let minutes = input % 60;
		let strHourFormat = `${hours}:${minutes}`;
	}

	handleChange(event) {
		this.setState({ time: event.target.value });
		let inputVal = this.state.time;
		let hours = inputVal / 60;
		let minutes = inputVal % 60;
		this.setState.hours = `${hours}:${minutes}`;
	}

	handleClick(event) {
		event.preventDefault();
	}

	getValue() {
		let inputVal = this.state.time;
		let hours = inputVal / 60;
		let minutes = inputVal % 60;
		this.setState.hours = `${hours}:${minutes}`;
	}

	information = {
		headerInfo: "Convert Minutes to Seconds",

		description:
			"Enter in a number of minutes and this app will convert it to seconds."
	};

	render() {
		return (
			<CalcForm
				id='timeConverter'
				headerInfo={this.information.headerInfo}
				description={this.information.description}
				label='Enter minutes'
				inputName='minutes'
				placeholder='placeholder'
				handleChange={this.handleChange}
				btnText='Convert'
			/>
		);
	}
}

export default TimeConverter;

{
	/* <div id='timeConverter'>
				<h3 className='ui center aligned header dividing'>
					Convert Minutes to Seconds
				</h3>
				<p>
					Enter in a number of minutes and this app will convert it to seconds.
				</p>
				<form className='ui form'>
					<div className='field'>
						<label> Enter minutes</label>
						<input
							type='text'
							name='minutes'
							placeholder='Enter minutes'
							value={this.setState.time}
							onChange={this.handleChange.bind(this)}
						/>
					</div>
					<button
						className='ui button primary center aligned'
						onClick={e => this.handleClick(e)}
					>
						Convert
					</button>

					<div className='field'>
						<label> Results</label>
						<input
							type='text'
							name='hoursTxt'
							placeholder='...'
							onChange={this.state.time}
						/>
					</div>
				</form>
			</div> */
}
