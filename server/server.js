const express = require("express");
const app = express();
const xss = require("xss-clean");
const mongoSanitaze = require("express-mongo-sanitize");
const routes = require("./routes");

app.use(express.json());

app.use(xss());
app.use(mongoSanitaze());

app.use("/api", routes);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server is running on ${port}`));
