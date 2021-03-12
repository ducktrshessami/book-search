import { Component } from "react";
import BookList from "../../components/BookList";
import API from "../../utils/api";

export default class Saved extends Component {
    state = { books: [] }

    componentDidMount() {
        API.get()
            .then(books => this.setState({ books: books }))
            .catch(console.error);
    }

    render() {
        return (
            <BookList title="Saved Books" saved={true} books={this.state.books} />
        );
    }
};
