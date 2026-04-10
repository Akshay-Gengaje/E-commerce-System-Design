# Database Design

## Core Tables

### products
- `id` (PK, serial)
- `name` (varchar)
- `description` (text)
- `price` (integer, stored in paise/cents)
- `image_url` (text)
- `category` (varchar)
- `stock` (integer)
- `created_at` (timestamp)

### users (planned)
- `id` (PK)
- `name`
- `email` (unique)
- `password_hash`
- `created_at`

### cart_items (planned)
- `id` (PK)
- `user_id` (FK -> users.id)
- `product_id` (FK -> products.id)
- `quantity`

### orders (planned)
- `id` (PK)
- `user_id` (FK -> users.id)
- `status`
- `total_amount`
- `created_at`

### order_items (planned)
- `id` (PK)
- `order_id` (FK -> orders.id)
- `product_id` (FK -> products.id)
- `quantity`
- `unit_price`

## SQL Migration (Current)

Current SQL migration is available in:

- `backend/sql/schema.sql`

Apply it with:

```bash
psql -U postgres -d ecommerce_db -f backend/sql/schema.sql
```
