import React from "react";
import "./products.css";
import { ProductData } from "../../assets/data/ProductData";
import { ProductCard } from "../common/cards/product/ProductCard";

const Products = () => {
  return (
    <div className="container mt-80">
      <h3 className="form-heading">Try our other free products</h3>

      <div className="product-container">
        {ProductData.length &&
          ProductData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
