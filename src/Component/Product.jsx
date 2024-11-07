import React from "react";
import product1 from "../assests/cart-item.png";
import product2 from "../assests/product-3.png";
import product3 from "../assests/product-3.png";
const Product = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          <span>Our</span> products
        </h1>

        <div className="box-container">
          {product.map((item, index) => {
            return (
              <div className="box">
                <div className="icons">
                  <a href="/" className="fas fa-shopping-cart"></a>
                  <a href="/" className="fas fa-heart"></a>
                  <a href="/" className="fas fa-eye"></a>
                </div>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <h3>fresh coffee</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div class="price">
                  $15.99<span>20.99</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;

const product= [
  {
    image: product1,
  },
  {
    image: product2,
  },
  {
    image: product3,
  },
];
