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

const server = app.listen(port, () =>
  console.log(`server is running on ${port}`)
);
const io = require("/socket").init(server, {
  cors: { origin: "*" },
});
io.on("connection", (socket) => {
  console.log("Client connected");
});
