import { Link } from "react-router-dom";
function Showallcategories(props) {
    return (
        <div className="allCategoriesLinks" >
            <Link to="/pets/dog" id="noUnder" > <h4>Dog</h4>  </Link>
            <Link to="/pets/cat" id="noUnder"> <h4>Cat</h4> </Link>
            <Link to="/pets/fish" id="noUnder" > <h4>Fish</h4> </Link>
            <Link to="/pets/bird" id="noUnder"> <h4>Bird</h4> </Link>
            <Link to="/topDeals" id="noUnder"><h4>Top Deals</h4> </Link>
            <Link to="/account" id="noUnder"><h4> Account </h4></Link>
        </div>
    )

}
export default Showallcategories