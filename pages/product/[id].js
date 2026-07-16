import Link from "next/link";
export default function ProductDetails({ product }) {
  return (
    <div className="container py-5">
      <Link href="/" className="btn btn-secondary mb-4">
        ← Back to Products
      </Link>
      <div className="row">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-md-7">
          <h2>{product.title}</h2>

          <h3 className="text-success my-3">${product.price}</h3>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating.rate}(
            {product.rating.count} reviews)
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
