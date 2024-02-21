import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ GridList, Products }) {
  console.log(Products);
  return (
    <div
      className={`show-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {Products.map((product, i) => {
        return (
          <div key={i} className="col-lg-4 col-md-6 col-12 ">
            <div className="product-item">
              {/* product-thumb */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} />
                </div>
                {/* product action links */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to={`/cart-page`}>
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>
              {/* Product content */}
              <div className="product-content text-center">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <h6>{product.price}$</h6>
              </div>
            </div>





            {/*  List style */}
            <div className="product-list-item">
              {/* product-thumb */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt={product.name} />
                </div>
                {/* product action links */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <a href="#">
                    <i className="icofont-heart"></i>
                  </a>
                  <Link to={`/cart-page`}>
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>
              {/* Product content */}
              <div className="product-content ">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <h6>{product.price}$</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
