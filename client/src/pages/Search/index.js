import { useState } from "react";
import BookSearch from "../../components/BookSearch";
import BookList from "../../components/BookList";
import bookSearch from "../../utils/bookSearch";

export default function Search() {
    const [searchResults, setSearch] = useState([]);

    function search(query) {
        bookSearch(query)
            .catch(console.error);
    }

    return (
        <section>
            <BookSearch onSubmit={search} />
            <BookList title="Results" books={searchResults} saved={false} />
        </section>
    );
};
