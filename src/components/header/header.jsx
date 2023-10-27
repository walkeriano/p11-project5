import "./Header.css";
import React from "react";
import logo from "../../img/logo-deca.png";
import lupa from "../../img/lupa.svg";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header-body">
      <div className="ad-yellow">
        Cheques descuentos, novedades y mucho más, ¡Suscríbete ya!
      </div>
      <section className="bar-tools">
        <div className="box-logo">
          <img className="logo-dec" src={logo} alt="logo-deca" />
        </div>
        <div className="box-search">
          <input
            className="search"
            type="search"
            placeholder="Busca producto, deporte..."
          />
          <button className="btn-search">
            <img src={lupa} alt="icon-lupa" />
          </button>
        </div>
        <div className="box-tools">
          <button className="">ayuda</button>
          <button className="">tienda</button>
          <button className="">mi cuenta</button>
          <button className="">mi cesta</button>
        </div>
      </section>
      <section className="cont-nav">
        <nav className="nav-sec">
          <Link to="/all-products">Deportes</Link>
          <a href="/">Mujer</a>
          <a href="/">Hombre</a>
          <a href="/">Infantil</a>
          <a href="/">Equipamiento</a>
          <a href="/">Nutricion y Salud</a>
          <a href="/">Descuentos</a>
        </nav>
        <div className="nav-sec-two">
          <a href="">Segunda vida</a>
          <a href="">Servicios</a>
        </div>
      </section>
    </div>
  );
}
