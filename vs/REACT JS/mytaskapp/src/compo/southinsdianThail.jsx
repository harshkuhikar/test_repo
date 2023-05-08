import React, { Component } from 'react';

class southinsdianThail extends Component {
    constructor() {
        super();
        this.state = {name1: "",name2: "",name3: "",name4: "",};
    }
    abtnclck = () => {
        console.log("btn called");
        this.setState({name1:"masal dosa",name2:"dli sambhaR",name3:"Uttapam",name4:"Sandwich Uttapam",})
    };
    bbtnclck = () => {
        this.setState({name1:"masal dosa",name2:"dli sambhaR",name3:"Uttapam",name4:"Sandwich Uttapam",})
    }
    cbtnclck = () => {
        this.setState({name1:"masal dosa",name2:"dli sambhaR",name3:"Uttapam",name4:"Sandwich Uttapam",})
    }
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="btn btn-primary ms-5" onClick={this.abtnclck}>
                        fix lunch
                    </button>
                    <button className="btn btn-success ms-5" onClick={this.bbtnclck}>
                        fix deinner
                    </button>
                    <button className="btn btn-primary  ms-5" onClick={this.cbtnclck}>
                        other
                    </button>
                </div>
                <div className="ms-5 mt-5">
                    <p>{this.state.name1}</p>
                    <p>{this.state.name2}</p>
                    <p>{this.state.name3}</p>
                    <p>{this.state.name4}</p>
                </div>
            </div>
        );
    }
}

export default southinsdianThail;