import "./header.css";
import logo from "../../img/logo-deca.png"

export default function Header(){
    return (
        <div className="header-body">
            <div className="ad-yellow" >Cheques descuentos, novedades y mucho más, ¡Suscríbete ya!</div>
            <section className="bar-tools">
                <div className="box-logo" >
                    <img className="logo-dec" src={logo} alt="logo-deca" />
                </div>
                
                <div className="box-search">
                    <input className="" type="search" />
                    <button className="">
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="box-tools">
                    <div className="">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

