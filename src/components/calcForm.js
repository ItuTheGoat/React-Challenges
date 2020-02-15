import React, { Component } from "react";

const calcForm = props => {
  return (
    <div id={props.id}>
      <h3 className="ui center aligned header dividing">{props.headerInfo}</h3>
      <p>{props.description}</p>
      <form className="ui form">
        <div className="field">
          <label>{props.label}</label>
          <input
            type="text"
            name={props.inputName}
            placeholder={props.placeholder}
          />
        </div>
        <button
          className="ui primary button"
          onClick={props.onHandleClick}
          onChange={props.handleChange}
        >
          {props.btnText}
        </button>

        <h5>Results: </h5>
        <p>{this.props.resultsDisplay}</p>
      </form>
    </div>
  );
};

export default calcForm;

{
  /* onChange={this.handleChange} */
}
{
  /* onClick={e => this.handleClick(e)} */
}
