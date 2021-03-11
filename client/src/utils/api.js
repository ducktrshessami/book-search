import phin from "phin";

const API = {
    get: function () {
        return phin({
            url: "/api/books",
            parse: "json"
        })
            .then(res => res.body);
    },
    post: function (book) {
        return phin({
            url: "/api/books",
            parse: "json",
            method: "post",
            data: book
        })
            .then(res => res.body);
    },
    delete: function (id) {
        return phin({
            url: "/api/books/" + id,
            method: "delete"
        });
    }
};

export default API;
