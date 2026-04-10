# Local Setup Guide

## 1) Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm

## 2) Create database

```sql
CREATE DATABASE ecommerce_db;
```

## 3) Backend setup

```bash
cd backend
copy .env.example .env
npm install
```

Update `.env` with your PostgreSQL credentials:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ecommerce_db
```

Run schema:

```bash
psql -U postgres -d ecommerce_db -f sql/schema.sql
```

Start backend:

```bash
npm run dev
```

## 4) Frontend setup

```bash
cd frontend
copy .env.local.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## 5) Seed sample products

Run after backend starts:

```bash
curl -X POST http://localhost:5000/api/products/seed
```
