import Nav from "./Nav";
import {Link } from "react-router-dom";

function Dogs(props) {
    return (
        <div>
            <Nav />

            <div className="searchRow">
                <div className="searchLeft" >  </div>
                <div className="searchMiddle" >

                    {props.items.map((item) => {
                        if (item.fields.animal === "dog") {
                            return (

                                <div className="showSearchItem" >
                                    <Link to={`/item/${item.id}`}>
                                        <div> <img id="searchImage" src={item.fields.image} /></div>
                                    </Link>
                                    {/* <div><p>-------------------------------------------</p> </div> */}
                                    <div id="searchTitle" >{item.fields.title} </div>
                                    <div>Rating: {item.fields.rating}</div>
                                    <div>Price: ${item.fields.price}</div>
                                </div>

                            )
                        }
                    })}
                </div>
                <div className="searchRight" ></div>
            </div>

        </div>
    )
}

export default Dogs