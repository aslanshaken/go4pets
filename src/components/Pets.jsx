import Nav from "./Nav";
import { Link, useParams } from "react-router-dom";

function Pets(props) {
    const params = useParams();
    console.log(params.id)

    return (
        <div>
            <Nav />
            <div className="items-container">
                <h1 id="itemsWord" >Suppliers for {params.id.toUpperCase()}</h1>
                <div className="searchMiddleItems" >
                    {props.items.map((item) => {
                        if (item.fields.animal === params.id) {
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

export default Pets