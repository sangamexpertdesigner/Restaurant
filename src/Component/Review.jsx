import React from "react";
import menuimage1 from "../assests/pic-1.png";
import menuimage2 from "../assests/pic-1.png";
import menuimage3 from "../assests/pic-1.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's<span> review</span>
        </h1>
        <div className="box-container">
            {review.map((item, index) => {
              return (
                <div className="box">
                  <i id="quo" className="fas fa-quote-right"></i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus
                    aut laborum, nisi quas eaque laudantium consequuntur iste ex
                    aliquam minus vel? Nemo.
                  </p>
                  <img src={item.image} alt=""  className="user"/>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              );
            })}
          
          

        </div>
      </section>
    </>
  );
};

export default Review;
const review = [
  {
    name: "Add to cart",
    image: menuimage1,
  },
  {
    name: "Add to cart",
    image: menuimage2,
  },
  {
    name: "Add to cart",
    image: menuimage3,
  },
];
