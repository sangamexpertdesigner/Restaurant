import React from "react";
import blogimage1 from "../assests/blog-1.jpeg";
import blogimage2 from "../assests/blog-2.jpeg";
import blogimage3 from "../assests/blog-3.jpeg";
const blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          <span>Our</span> blogs
        </h1>
        <div className="box-container">
        {menu.map((item, index) => {
          return (
            <div className="box">
              <div className="image">
              <img src={item.image} alt="" />
              </div>
             <div className="content">
             <a href="/" className="title">
              tasty and refreshing spices
            </a>
              <span>by admin / 21st may, 2021</span>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta.
            </p>
              <a href="/" class="btn">
                {item?.name}
              </a>
             </div>
            </div>
          );
        })}
      </div>

          
        
      </section>
    </>
  );
};

export default blogs;

const menu = [
  {
    name: "Read More",
    image: blogimage1,
  },
  {
    name: "Read More",
    image: blogimage2,
  },
  {
    name: "Read More",
    image: blogimage3,
  }
];
