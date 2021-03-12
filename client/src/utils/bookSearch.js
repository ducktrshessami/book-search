import fetch from "node-fetch";

export default function bookSearch(query, startIndex = 0, maxResults = 10) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(({ totalItems, items }) => ({
            totalItems,
            items: items.map(({ volumeInfo }) => ({
                title: volumeInfo.title,
                authors: volumeInfo.authors,
                description: volumeInfo.description,
                image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/100x150",
                link: volumeInfo.infoLink
            }))
        }));
};
