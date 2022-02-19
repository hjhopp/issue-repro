const path    = require("path");
const express = require("express");

const app  = express();
const port = 8888;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/test", (req, res, next) => res.json());

app.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use((err, req, res, next) => {
    res.status(500).send({ message : err.message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
