const express = require("express");
const router = express.Router();
const ColorThemeController = require("../controllers/colorThemeController");

// Routes for color themes
router.post("/", ColorThemeController.createTheme);
router.get("/", ColorThemeController.getAllThemes);
router.get("/:id", ColorThemeController.getThemeById);
router.put("/:id", ColorThemeController.updateTheme);
router.delete("/:id", ColorThemeController.deleteTheme);

module.exports = router;
