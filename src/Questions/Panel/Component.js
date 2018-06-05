import React from "react";

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="panel panel-primary" style={{ height: "200px" }}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body" style={{ marginTop: "30px" }}>
                    {this.props.question}
                </div>
            </div>
        );
    }
}