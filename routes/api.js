const db = require("../models");

module.exports = function (app) {
    app.get("/api/books", function (req, res) {
        db.Book.find()
            .then(books => res.status(200).json(books))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });

    app.post("/api/books", function (req, res) {
        db.Book.create(req.body)
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });
};
