import React from "react";
import menuimage1 from "../assests/menu-1.png";
import menuimage2 from "../assests/menu-2.png";
import menuimage3 from "../assests/menu-3.png";
import menuimage4 from "../assests/menu-4.png";
import menuimage5 from "../assests/menu-5.png";
import menuimage6 from "../assests/menu-6.png";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        <span>Our</span> Menu
      </h1>
      <div className="box-container">
        {menu.map((item, index) => {
          return (
            <div className="box">
              <img src={item.image} alt="" />
              <h3>tasty and healty</h3>
              <div class="price">
                $15.99<span>20.99</span>
              </div>
              <a href="/" class="btn">
                {item?.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Menu;

const menu = [
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
  {
    name: "Add to cart",
    image: menuimage4,
  },
  {
    name: "Add to cart",
    image: menuimage5,
  },
  {
    name: "Add to cart",
    image: menuimage6
    }
];
