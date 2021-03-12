import API from "../../utils/api";

export default function Book(props) {
    function save() {
        API.post(props);
    }

    function remove() {
        API.delete(props._id);
    }

    function button(saved) {
        if (saved) {
            return <button onClick={remove} className="btn btn-danger mx-1">Delete</button>;
        }
        else {
            return <button onClick={save} className="btn btn-success mx-1">Save</button>;
        }
    }

    return (
        <li className="black-border mx-1 p-5">
            <div className="float-right">
                <a href={props.link} className="mx-1 btn btn-secondary">View</a>
                {button(props.saved)}
            </div>
            <h5>{props.title}</h5>
            {props.authors.length ? <h6>Written By {props.authors.join(", ")}</h6> : undefined}
            <br />
            <img src={props.image} alt={props.title} className="float-left mt-2 mr-3" />
            <p>{props.description}</p>
        </li>
    );
};
