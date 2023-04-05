import "./productCard.css";
const ProductCard = ({ product }) => {
  const { name, description, product_img } = product;
  return (
    <div className="product-card">
      <img src={product_img} alt={`${name}-poster`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export { ProductCard };
