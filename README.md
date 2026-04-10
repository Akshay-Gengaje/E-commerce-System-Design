# E-Commerce System Design Starter

Full-stack e-commerce starter with:
- `frontend`: Next.js (App Router + Tailwind CSS)
- `backend`: Node.js + Express APIs
- `database`: PostgreSQL
- `docs`: markdown guides for architecture, DB design, API contracts, and setup

## Quick Start

### 1) Backend
```bash
cd backend
copy .env.example .env
npm install
psql -U postgres -d ecommerce_db -f sql/schema.sql
npm run dev
```

### 2) Frontend
```bash
cd frontend
copy .env.local.example .env.local
npm install
npm run dev
```

### 3) Seed products
```bash
curl -X POST http://localhost:5000/api/products/seed
```

## Available APIs

- `GET /health`
- `GET /api/products`
- `POST /api/products/seed`

## Documentation

- `docs/SYSTEM_DESIGN.md`
- `docs/DATABASE_DESIGN.md`
- `docs/API_GUIDE.md`
- `docs/SETUP_GUIDE.md`
