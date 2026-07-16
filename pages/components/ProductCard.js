import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="text-decoration-none text-dark"
    >
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{
            height: "220px",
            objectFit: "contain",
          }}
        />

        <div className="card-body d-flex flex-column">
          <h6>{product.title}</h6>

          <p className="text-success fw-bold">${product.price}</p>

          <p className="text-muted">{product.category}</p>

          <p>⭐ {product.rating.rate}</p>
        </div>
      </div>
    </Link>
  );
}
