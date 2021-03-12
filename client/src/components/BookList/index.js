import Book from "./Book";
import "./BookList.css";

export default function BookList({ title, books, saved }) {
    return (
        <section className="black-border m-5 p-5">
            <h5>{title}</h5>
            <br />
            <ul className="book-list">
                {books.map(item => <Book key={item.link} {...item} />)}
            </ul>
        </section>
    );
};
