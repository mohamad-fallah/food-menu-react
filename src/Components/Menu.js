import React from "react";

const Menu = ({ allMenus }) => {
  return (
    <>
      {allMenus.map((menu) => {
        return (
            <div key={menu.id} className="section-center">
              <article className="menu-item">
                <img src={menu.img} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{menu.title}</h4>
                    <h4 className="price">{menu.price}</h4>
                  </header>
                  <p className="item-text">{menu.desc}</p>
                </div>
              </article>
            </div>       
        );
      })}
    </>
  );
};

export default Menu;
