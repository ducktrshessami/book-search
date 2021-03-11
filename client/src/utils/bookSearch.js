import phin from "phin";

export default function bookSearch(query, startIndex = 0, maxResults = 10) {
    return phin({
        url: `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`,
        parse: "json"
    })
        .then(res => res.body)
        .then(({ totalItems, items }) => ({
            totalItems,
            items: items.map(({ volumeInfo }) => ({
                title: volumeInfo.title,
                authors: volumeInfo.authors,
                description: volumeInfo.description,
                image: volumeInfo.imageLinks.thumbnail,
                link: volumeInfo.infoLink
            }))
        }));
};
