import "./BookSearch.css";

export default function BookSearch({ onSubmit }) {
    function submitWrapper(event) {
        event.preventDefault();
        onSubmit(document.getElementById("search").value.trim());
    }

    return (
        <div className="book-search black-border m-5 p-5">
            <h5>Book Search</h5>
            <br />
            <form onSubmit={submitWrapper}>
                <label htmlFor="book">Book</label>
                <input id="search" name="book" type="text" placeholder="Search" className="w-100 mb-3" />
                <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
        </div>
    );
};
