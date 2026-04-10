const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const pool = require("./db");
const sampleProducts = require("./seedProducts");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, description, price, image_url, category, stock FROM products ORDER BY id DESC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
});

app.post("/api/products/seed", async (req, res) => {
  try {
    const countResult = await pool.query("SELECT COUNT(*)::int AS total FROM products");
    if (countResult.rows[0].total > 0) {
      return res.json({ message: "Products table already contains data. Skipping seed." });
    }

    const insertQuery = `
      INSERT INTO products (name, description, price, image_url, category, stock)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;

    for (const product of sampleProducts) {
      await pool.query(insertQuery, [
        product.name,
        product.description,
        product.price,
        product.image_url,
        product.category,
        product.stock,
      ]);
    }

    return res.status(201).json({ message: "Sample products seeded successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to seed products", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
