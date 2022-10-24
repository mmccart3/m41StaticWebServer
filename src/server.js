const express = require("express");
const app = express();

app.use("/static", express.static("public")); //Translates the /static directory and repoints it to the public directory



app.listen(5002, () => {
    console.log("Listening on Port 5002")
});