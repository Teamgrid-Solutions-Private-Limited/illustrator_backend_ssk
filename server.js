require("dotenv").config()
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const colorThemeRoutes = require("./routes/colorThemeRoutes");
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoutes);
app.use("/api/color-themes", colorThemeRoutes);
const PORT = process.env.PORT || 5454;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
