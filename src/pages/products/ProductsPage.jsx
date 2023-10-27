import "./ProductsPage.css";
import Header from "../../components/header/Header.jsx";
import data from "../../data.json";
import euro from "../../img/euro-icon.svg";
import star from "../../img/start.svg";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <section className="products-page">
      <Header />
      <div className="cont-cards">
        {data.products.map((product) => {
          return (
            <div   className="card-product" key={product.id}>
              <div className="price">
                <p>{product.price}</p>
                <img src={euro} alt="euro" />
              </div>
              <img
                className="img-card"
                src={product.imagenOne}
                alt="img-product"
              />
              <Link to={`/detalle-product/${product.id}`} className="i-product">
                <h3>{product.brand}</h3>
                <p>{product.nameProduct}</p>
              </Link>
              <div className="puntos">
                <img src={star} alt="i-star" />
                <img src={star} alt="i-star" />
                <img src={star} alt="i-star" />
                <img src={star} alt="i-star" />
              </div>
              <div className="check">
                <input type="checkbox"/>
                <p>Comparar</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
