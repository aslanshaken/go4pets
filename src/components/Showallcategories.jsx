import {Link } from "react-router-dom";
function Showallcategories(props) {
    return (
        <div className="allCategoriesLinks" >
            <Link to="/dogs" id="noUnder" >  Dog </Link>
            <Link to="/cats" id="noUnder"> Cat </Link>
            <Link to="/fish" id="noUnder" >  Fish </Link>
            <Link to="/birds" id="noUnder"> Bird </Link>
            <Link to="/topDeals" id="noUnder">Top Deals </Link>
            <Link to="/account" id="noUnder"> Account </Link>
        </div>
    )

}
export default Showallcategories