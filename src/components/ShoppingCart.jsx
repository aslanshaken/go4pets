import { Link } from "react-router-dom";
function ShoppingCart(props) {
    return (
        <Link to="/account" >
            <button>
                <img id="cartButton" src="https://img.icons8.com/ultraviolet/80/000000/guest-male.png" alt="x"/>
            </button>
        </Link>
    )
}

export default ShoppingCart;