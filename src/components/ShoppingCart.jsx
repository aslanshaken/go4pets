import {Link} from "react-router-dom";
function ShoppingCart(props) {
    return (
        <div className="shoppingLocation" >
        <div> 
            <form>
                <Link to="/account" >
                <button>
                    <img id="cartButton" src="https://img.icons8.com/plasticine/100/000000/favorite-cart.png"/>
                </button>
                </Link>
            </form>
        </div>
    </div>
    )
}

export default ShoppingCart;