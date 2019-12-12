import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className='ui inverted vertical menu visible left sidebar'>
			<NavLink to='/' exact className='item '>
				Home
				<i className='home icon'></i>
			</NavLink>
			<NavLink to='/convertTime' className='item'>
				Convert Time
			</NavLink>
			<NavLink to='/findLongestWord' className='item'>
				Find Longest Word
			</NavLink>
			<NavLink to='/changeLetters' className='item'>
				Change the Letters
			</NavLink>
			<NavLink to='/factorials' className='item'>
				Factorise a number
			</NavLink>
		</div>
	);
};

export default NavBar;
