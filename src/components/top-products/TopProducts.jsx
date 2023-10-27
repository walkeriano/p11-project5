import "./TopProducts.css";
import euro from "../../img/euro-icon.svg";
import star from "../../img/start.svg";
import data from "../../data.json";
import arrow from "../../img/flecha-02-01.svg";
import React, { useRef } from "react";


export default function TopProducts() {
  let container = useRef(null);

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 200;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 200;
    }
  };

  return (
    <section className="box-products">
      <div className="cont-products">
        <p className="title-cont">Top ventas cerca de ti</p>
        <div ref={container} className="slider-products">
          {data.products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <div className="price">
                  <p>{product.price}</p>
                  <img src={euro} alt="euro" />
                </div>
                <img
                  className="img-card"
                  src={product.imagenOne}
                  alt="img-product"
                />
                <div className="i-product">
                  <h3>{product.brand}</h3>
                  <p>{product.nameProduct}</p>
                </div>
                <div className="puntos">
                  <img src={star} alt="i-star" />
                  <img src={star} alt="i-star" />
                  <img src={star} alt="i-star" />
                  <img src={star} alt="i-star" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-cont">
          <button onClick={left}>
            <img className="img-arrow-two" src={arrow} alt="arrow-grey" />
          </button>
          <span></span>
          <span></span>
          <span></span>
          <button onClick={right}>
            <img className="img-arrow" src={arrow} alt="arrow-grey" />
          </button>
        </div>
      </div>
    </section>
  );
}
