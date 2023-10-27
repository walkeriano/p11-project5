import "./HomePage.css";
import Slider from '../../components/slider/Slider.jsx';
import TopProducts from '../../components/top-products/TopProducts.jsx';
import Header from '../../components/header/Header.jsx';


export default function HomePage() {
    return (
        <section className="home-body" >
            <Header/>
            <Slider/>
            <TopProducts/>
        </section>
    );
}