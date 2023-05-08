import React, { Component } from 'react';

class API extends Component {
    constructor() {
        super()
        console.log("constructor Called");
        this.state = { status: "Pending.....", data: '' }
    }
    componentDidMount() {
        console.log("componentDidMount Called");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then((res) => res.json())
                .then((Response) => {
                    console.log(Response);
                    this.setState({ status: "Completed", data: Response })
                })
        }, 2000);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.status}</h1>
                            <div>{this.state.status == "Completed"?<>{JSON.stringify(this.state.data)}</>:"No Data Found"}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default API;