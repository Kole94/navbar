import React, { Component } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';




class Forth extends Component {

	render() {
		return (

			<div className='menu_list4'>
				<CSSTransition
					key={1}
					timeout={500}
					classNames="item"
				>
					<p className='start'><a onClick={this.click}>Vitamin Boosters</a></p></CSSTransition>
				<CSSTransition
					key={2}
					timeout={500}
					classNames="item"
				>
					<p className='start'><a onClick={this.click}>Wild Pick</a></p></CSSTransition>
				<CSSTransition
					key={3}
					timeout={500}
					classNames="item"
				>
					<p className='start'><a onClick={this.click}>Exotic Mixes</a></p></CSSTransition>




			</div>
		);
	}
}

export default Forth;