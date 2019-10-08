import React, { Component } from 'react';

import {click} from '../../store/ActionCreator'
import { connect,useDispatch } from 'react-redux';





class Third extends Component {
    
    render() {
        return (
            <div className='menu_list'>
                        <p className='start'><a onClick={this.click}>Questioneer</a></p>
                        <p className='start'><a onClick={this.click}>Hormones</a></p>
                        <p className='start'><a onClick={() => this.props.click(5)}>Special Selection</a></p>
                        <p className='start'><a onClick={this.click}>Drugs</a></p>
                        <p className='start'><a onClick={this.click}>Pregnancies</a></p>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Third);

