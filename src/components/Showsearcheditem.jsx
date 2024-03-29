import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Showsearcheditem(props) {
    const params = useParams();

    return (
        <div>
            <Nav />
            <div className="items-container" >
                <h3>Results for {params.value}</h3>
                <div className="searchMiddleItems" >
                    {props.items.map((item) => {
                        if (item.fields.title.toLowerCase().indexOf(params.value) >= 0) {
                            return (
                                <Link to={`/item/${item.id}`} id="noUnder">
                                    <div className="showItems" >
                                        <div> <img id="searchImage" src={item.fields.image} alt={item.id} /></div>
                                        <div id="searchTitle" >{item.fields.title} </div>
                                        <div>Rating: {item.fields.rating}</div>
                                        <div>Price: ${item.fields.price}</div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
        </div>

    )
}

export default Showsearcheditem