import {Link } from "react-router-dom";
function Showallcategories(props) {
    return (
        <div className="allCategoriesLinks" >
            <Link to="/dogs"> <div id="noUnder" > Dog </div></Link>
            <Link to="/cats"> <div id="noUnder" > Cat </div></Link>
            <Link to="/fish"> <div id="noUnder" > Fish </div></Link>
            <Link to="/birds"> <div id="noUnder" > Bird </div></Link>
            <Link to="/topDeals"><div id="noUnder" > Top Deals </div></Link>
            <Link to="/account"> <div id="noUnder" > Account </div></Link>
        </div>
    )

}
export default Showallcategories