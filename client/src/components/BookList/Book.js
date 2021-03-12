import { Component } from "react";
import API from "../../utils/api";

export default class Book extends Component {
    state = { id: this.props._id }

    save() {
        API.post(this.props)
            .then(data => this.setState({ id: data._id }))
            .catch(console.error);
    }

    remove() {
        API.delete(this.props._id)
            .then(() => this.setState({ id: "" }))
            .catch(console.error);
    }

    button() {
        if (this.state.id) {
            return <button onClick={() => this.remove()} className="btn btn-danger mx-1">Delete</button>;
        }
        else {
            return <button onClick={() => this.save()} className="btn btn-success mx-1">Save</button>;
        }
    }

    render() {
        return (
            <li className="black-border mx-1 p-5">
                <div className="float-right">
                    <a href={this.props.link} className="mx-1 btn btn-secondary">View</a>
                    {this.button()}
                </div>
                <h5>{this.props.title}</h5>
                {this.props.authors.length ? <h6>Written By {this.props.authors.join(", ")}</h6> : undefined}
                <br />
                <img src={this.props.image} alt={this.props.title} className="float-left mt-2 mr-3" />
                <p>{this.props.description}</p>
            </li>
        );
    }
};
