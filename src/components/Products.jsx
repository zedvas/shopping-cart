import Product from "./Product";
const Products = ({ products, onLike, onAdd }) => {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onLike={onLike}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default Products;
