# E-Commerce System Design

## 1. High-Level Architecture

The application follows a 3-tier architecture:

1. **Frontend (Next.js App Router)**  
   - Renders product catalog UI.
   - Calls backend APIs over HTTP.

2. **Backend (Node.js + Express)**  
   - Exposes REST APIs for products and future modules (users, cart, orders).
   - Handles business logic and data validation.

3. **Database (PostgreSQL)**  
   - Stores products, users, carts, orders, and payments.
   - Acts as source of truth for e-commerce operations.

## 2. Module Breakdown

- **Catalog Service**: product listing, search, category filtering.
- **Auth Service (planned)**: signup/login with JWT sessions.
- **Cart Service (planned)**: add/remove/update cart items.
- **Order Service (planned)**: checkout and order tracking.
- **Payment Service (planned)**: payment provider integration.

## 3. Request Flow (Current)

1. Browser loads Next.js homepage.
2. Next.js fetches `GET /api/products` from Node.js backend.
3. Backend queries PostgreSQL `products` table.
4. Response is rendered as product cards.

## 4. Scalability Guidance

- Add Redis caching for product list and category pages.
- Use CDN for product images and static assets.
- Introduce background jobs for emails and order status updates.
- Separate services into microservices when domain complexity increases.

## 5. Security Guidance

- Keep secrets in `.env` and never commit production credentials.
- Use JWT + refresh tokens for authentication.
- Add request validation and rate-limiting middleware.
- Enable HTTPS and secure cookie settings in production.
