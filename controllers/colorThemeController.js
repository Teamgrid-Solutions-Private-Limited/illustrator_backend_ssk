const ColorTheme = require("../models/colorTheme");

class ColorThemeController {
  // Create a new color theme
  static async createTheme(req, res) {
    try {
      const { themeName, accentColor, buttonColor, hoverColor, baseColor } = req.body;

      // Validate required fields
      if (!themeName || !accentColor || !buttonColor || !hoverColor || !baseColor) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newTheme = await ColorTheme.create({
        themeName,
        accentColor,
        buttonColor,
        hoverColor,
        baseColor,
      });

      res.status(201).json({
        message: "Color theme created successfully",
        data: newTheme,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get all color themes
  static async getAllThemes(req, res) {
    try {
      const themes = await ColorTheme.find();
      res.status(200).json({ data: themes });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a single color theme by ID
  static async getThemeById(req, res) {
    try {
      const { id } = req.params;
      const theme = await ColorTheme.findById(id);

      if (!theme) {
        return res.status(404).json({ message: "Color theme not found" });
      }

      res.status(200).json({ data: theme });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update a color theme by ID
  static async updateTheme(req, res) {
    try {
      const { id } = req.params;
      const updatedTheme = await ColorTheme.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedTheme) {
        return res.status(404).json({ message: "Color theme not found" });
      }

      res.status(200).json({
        message: "Color theme updated successfully",
        data: updatedTheme,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete a color theme by ID
  static async deleteTheme(req, res) {
    try {
      const { id } = req.params;
      const deletedTheme = await ColorTheme.findByIdAndDelete(id);

      if (!deletedTheme) {
        return res.status(404).json({ message: "Color theme not found" });
      }

      res.status(200).json({ message: "Color theme deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ColorThemeController;
