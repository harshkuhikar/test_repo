import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor Called");
        this.state={counter:0}

    }

    // componentWillMount() {
    //     console.log("componentWillMount Called");

    // }

    componentDidMount() {
        console.log("componentDidMount Called");

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps Called");

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Called");
        console.log("nextState",nextState);
        return true

    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate Called");

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Called");
        console.log("prevState",prevState);

    }

    componentWillUnmount() {
        console.log("componentWillUnmount Called");
    }
    BtnClck=()=>{
        this.setState({counter:this.state.counter+100000000000000*8000000000})
    }
    
    

    render() {
        return (
           <>
           <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{this.state.counter}</h1>
                    <button className='btn btn-primary BtnClck' onClick={this.BtnClck}>Click Me</button>

                </div>
            </div>
           </div>
           </>
        );
    }
}

export default Lifecycle;