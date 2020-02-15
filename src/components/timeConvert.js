import React from "react";
import CalcForm from "./calcForm";
import { connect } from "react-redux";

class TimeConverter extends React.Component {
  state = {
    time: null
  };

  // TimeConvert(input) {
  //   //event.preventDefault();
  //   // Convert Minutes to Hours
  //   let hours = input / 60;
  //   let minutes = input % 60;
  //   let strHourFormat = `${hours}:${minutes}`;
  // }

  handleChange(event) {
    this.setState({ time: event.target.value });

    console.log(event.target.value);
  }

  handleClick(event) {
    event.preventDefault();
  }

  // getValue() {
  //   let inputVal = this.state.time;
  //   let hours = inputVal / 60;
  //   let minutes = inputVal % 60;
  //   this.setState.hours = `${hours}:${minutes}`;
  // }

  information = {
    headerInfo: "Convert Minutes to Seconds",

    description:
      "Enter in a number of minutes and this app will convert it to seconds."
  };

  render() {
    return (
      <CalcForm
        id="timeConverter"
        headerInfo={this.information.headerInfo}
        description={this.information.description}
        onClick={this.props.onConvert}
        label="Enter minutes"
        inputName="minutes"
        placeholder="placeholder"
        handleChange={this.handleChange}
        btnText="Convert"
        resultsDisplay={this.state.result}
      />
    );
  }
}
const mapDispatchToProps = dispatch => {
  // Need to return the dispatch for time convert
  return {
    onConvert: () => dispatch({ type: "CONVERT", payload: this.state.time })
  };
};

const mapStateToProps = state => {
  return { result: state.result };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeConverter);
