import { Link } from "react-router-dom";
import LogoStyle from '../assets/logo.png'
import Allcategories from "./Allcategories";
import AddforSale from "./AddforSale";
import ShoppingCart from "./ShoppingCart";

function Logo() {
    return (
        <div className="top-container">

            <div className="top-right">
                <Allcategories />
            </div>

            <div className="logoMain" >
                <Link to="/" >
                    <img id="logoImg" src={LogoStyle} alt="logo" />
                </Link>
            </div>

            <div className="top-left">
                <div><AddforSale /></div>
                <div><ShoppingCart /></div>
            </div>
            <div className="top-right-cell-only">
                <Allcategories />
            </div>

        </div>
    )
}

export default Logo;