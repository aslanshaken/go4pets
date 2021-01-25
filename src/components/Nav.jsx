import Search from "./Search";
import Allcategories from "./Allcategories";
import Mainimage from "./Mainimage";
import Logo from "./Logo"
import AddforSale from "./AddforSale";
import ShoppingCart from "./ShoppingCart";


function Nav () {
    return(
        <div>
            <Logo />
            <Search />
            <Allcategories />
            <AddforSale />
            <ShoppingCart />
            <Mainimage />

        </div>
    )
}

export default Nav