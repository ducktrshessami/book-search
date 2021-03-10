const express = require("express");
const path = require("path");

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

// Green light
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
    require("./ai");
});
