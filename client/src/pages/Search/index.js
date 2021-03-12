import { useState } from "react";
import BookSearch from "../../components/BookSearch";
import BookList from "../../components/BookList";
import bookSearch from "../../utils/bookSearch";

export default function Search() {
    const [searchQuery, setQuery] = useState("");
    const [searchResults, setResults] = useState([]);

    function search(query) {
        setQuery(query);
        bookSearch(query)
            .then(res => res.items)
            .then(setResults)
            .catch(console.error);
    }

    return (
        <section>
            <BookSearch onSubmit={search} />
            {searchQuery ? <BookList title="Results" books={searchResults} saved={false} /> : undefined}
        </section>
    );
};
