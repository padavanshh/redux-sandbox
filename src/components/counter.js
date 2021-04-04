import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={inc}
                    className="btn btn-primary btn-lg ">inc
            </button>
            <button onClick={dec}
                    className="btn btn-primary btn-lg">dec
            </button>
            <button onClick={rnd}
                    className="btn btn-primary btn-lg">rnd
            </button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps, actions)(Counter);