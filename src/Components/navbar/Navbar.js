import React, { Component } from 'react';
import Fifth from './Fifth'
import First from './First'
import Sixth from './Sixth'
import Secound from './Secound'
import Forth from './Forth'
import Third from './Third'
import Head from './Head'
import { connect } from 'react-redux';
import { ConsoleLogger } from '@aws-amplify/core';
import { TransitionGroup, CSSTransition } from 'react-transition-group';





class Header extends Component {

	render() {
		console.log(this.props.a)
		return (
			<CSSTransition
				timeout={200}
				classNames={"my-node"}>
				<nav className='navbar'>

					<div>{(this.props.a === 0) ? <First /> : null}</div>
					<div>{(this.props.a === 1) ? <Secound /> : null}</div>
					<div>{(this.props.a === 2) ? <Third /> : null}</div>
					<div>{(this.props.a === 3) ? <Fifth /> : null}</div>
					<div>{(this.props.a === 4) ? <Sixth /> : null}</div>
					<div>{(this.props.a === 5) ? <Forth /> : null}</div>

				</nav></CSSTransition>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		a: state.reducerNumber.a
	}
}

export default connect(mapStateToProps)(Header);

