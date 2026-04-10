import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
};

async function getProducts(): Promise<Product[]> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${apiBaseUrl}/api/products`, { cache: "no-store" });
    if (!response.ok) {
      return [];
    }
    return response.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-900">E-Commerce Store</h1>
        <p className="mt-2 text-slate-600">
          Next.js frontend connected to a Node.js + PostgreSQL backend.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.length > 0 ? (
            products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-44 w-full">
                  <Image src={product.image_url} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                    {product.category}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">
                      Rs. {(product.price / 100).toFixed(2)}
                    </span>
                    <span className="text-xs text-slate-500">Stock: {product.stock}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              No products found. Start backend, setup database, and call `POST /api/products/seed`.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
