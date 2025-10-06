const mongoose = require("mongoose");

const colorThemeSchema = new mongoose.Schema({
  themeName: {
    type: String,
    required: true,
  },
  accentColor: {
    type: String,
    required: true,
  },
  buttonColor: {
    type: String,
    required: true,
  },
  hoverColor: {
    type: String,
    required: true,
  },
  baseColor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("colorThemes", colorThemeSchema);