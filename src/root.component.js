import React from "react";
var itemsHandler = {};
export default class Root extends React.Component {
    // static items = [{ firstName: "Turki", lastName: "Alotaibi" }];
    constructor(props) {
        super(props);
        this.state = { items: [{ firstName: "Turki", lastName: "Alotaibi" }] };
    }
    componentDidMount() {
        itemsHandler.addToList = (data) => {
            // `this` refers to our react component
            this.state.items.push(data);
            this.setState(this.state);
        };
    }
    render() {
        var listItems = this.state.items.map((item, index) => (
            <li
                className="list-group-item"
                key={index}
            >{`${item.firstName} ${item.lastName}`}</li>
        ));
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-list mr-1"></i>
                    List
                </div>
                <div className="card-body">
                    <ul className="list-group">{listItems}</ul>
                </div>
            </div>
        );
    }
}

var addToList = function (obj) {
    itemsHandler.addToList(obj.detail);
};

window.addEventListener("myEvent", addToList, false);
