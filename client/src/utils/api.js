import fetch from "node-fetch";

const API = {
    get: function (options) {
        let url = "/api/books";
        for (let col in options) {
            url += `${(url.includes("?") ? "&" : "?")}${col}=${options[col]}`;
        }
        return fetch(url)
            .then(res => res.json());
    },
    post: function (book) {
        return fetch("/api/books", {
            method: "post",
            body: JSON.stringify(book),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json());
    },
    delete: function (id) {
        return fetch("/api/books/" + id, { method: "delete" });
    }
};

export default API;
