import "./Slider.css";
import slideOne from "../../img/portada.jpg";
import slideTwo from "../../img/portada-two.JPG";
import flecha from "../../img/flecha-01.svg";
import React, {useRef} from "react";

export default function Slider(){
    let container = useRef(null);

    const left = () => {
        if (container.current) {
            container.current.scrollLeft -= 2000;
        }
    };

    const right = () => {
        if (container.current) {
            container.current.scrollLeft += 2000;
        }
    };

    return(
        <div className="space-cont">
            <div className="btn-slider" >
                <button className="btn-i" >Ver condiciones</button>
                <div className="splice" >
                    <button onClick={left} className="btn-arrow">
                        <img src={flecha} alt="flecha-arrow" />
                    </button>
                    <button onClick={right} className="btn-arrow">
                        <img src={flecha} alt="flecha-arrow" />
                    </button>
                </div>
            </div>
            <div ref={container} className="cont-slider">
                <img src={slideOne} alt="sliders"/>
                <img src={slideTwo} alt="sliders"/>
            </div>
        </div>
        
    );
}