# API Guide

Base URL (local): `http://localhost:5000`

## Health

### `GET /health`
Checks API and DB connectivity.

**Response**
```json
{
  "status": "ok",
  "database": "connected"
}
```

## Products

### `GET /api/products`
Returns all products ordered by latest first.

**Response**
```json
[
  {
    "id": 1,
    "name": "Noise Cancelling Headphones",
    "description": "Over-ear wireless headphones",
    "price": 7999,
    "image_url": "https://...",
    "category": "Electronics",
    "stock": 20
  }
]
```

### `POST /api/products/seed`
Inserts sample products into `products` table if empty.

**Response**
```json
{
  "message": "Sample products seeded successfully."
}
```
