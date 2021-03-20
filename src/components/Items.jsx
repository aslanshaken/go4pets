import { Link } from "react-router-dom";

function Items(props) {
    return (
        <div className="items-container">
            <h1 id="itemsWord" >Items for Sale</h1>
            <div className="searchMiddleItems" >
                {props.items.map((item) => {
                    return (
                        <Link to={`/item/${item.id}`} id="noUnder">
                            <div className="showItems" key={item.id} >
                                <div> <img id="searchImage" src={item.fields.image} alt={item.id} /></div>
                                <div id="searchTitle" >{item.fields.title} </div>
                                <div>Rating: {item.fields.rating}</div>
                                <div>Price: ${item.fields.price}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Items