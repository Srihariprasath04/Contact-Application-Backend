const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

// middleware (helps to pass the data stream that we receive from the client)
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler);

const port = process.env.PORT || 5001;


app.listen(port, () => {
    console.log("server running on port " + port);
})