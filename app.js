const express = require("express");
const dotenv = require("dotenv");

// Import Router files
const bootcampsRouter = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Routes
app.use("/api/v1/bootcamps", bootcampsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
