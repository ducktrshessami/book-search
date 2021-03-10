const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const build = path.resolve(__dirname, "client", "build");

var app = express();

// App config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api")(app);

// All non-API routes go to the client
if (process.env.NODE_ENV === "production") {
    app.use(express.static(build));
    app.get("*", function (req, res) {
        res.sendFile(path.join(build, "index.html"));
    });
}

// Connect to database before starting server
mongoose.connection.once("open", function () {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
