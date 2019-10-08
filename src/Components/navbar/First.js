import React, { Component, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { click } from '../../store/ActionCreator'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function First() {
	
	const dispatch = useDispatch();
	const [showButton, setShowButton] = useState(true);
	const [showMessage, setShowMessage] = useState(true);	
	
	return (
		<div className='menu_list'>
			<CSSTransition
				in={showMessage}
				timeout={300}
				classNames="alert"
				unmountOnExit
				onEnter={() => setShowButton(true)}
				onExited={() => setShowButton(false)}
			>
				<div>
					<p className='start'><a onClick={() => dispatch({ type: 'CLICK', payload: 1 })}>Procedure</a></p>
					<p className='start'><a onClick={() => dispatch({ type: 'CLICK', payload: 2 })}>Follow up</a></p>
					<p className='start'><a onClick={() => dispatch({ type: 'CLICK', payload: 3 })}>Compunication</a></p>
					<p className='start'><a onClick={() => dispatch({ type: 'CLICK', payload: 4 })}>Profile</a></p>
				</div>
			</CSSTransition>	
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		a: state.reducerNumber.a
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		click: (e) => dispatch(click(e))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(First);