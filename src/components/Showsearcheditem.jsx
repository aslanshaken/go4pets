import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Showsearcheditem(props) {
    const params = useParams();
    console.log(props.items)

    return (
        <div>
            <Nav />

            <div className="searchRow">
                <div className="searchLeft" > LEFT </div>
                <div className="searchMiddle" >

                    {props.items.map((item) => {
                        if (item.fields.title.toLowerCase().indexOf(params.value) >= 0) {
                            return (

                                <div className="showSearchItem" >
                                    <Link to={`/item/${item.id}`}>
                                        <div> <img id="searchImage" src={item.fields.image} /></div>
                                    </Link>
                                    {/* <div><p>-------------------------------------------</p> </div> */}
                                    <div id="searchTitle" >{item.fields.title} </div>
                                    <div><h4>Rating: {item.fields.rating}</h4></div>
                                    <div><h4>Price: ${item.fields.price}</h4></div>
                                </div>

                            )
                        }
                    })}
                </div>

                <div className="searchRight" > RIGHT </div>


            </div>

        </div>
    )
}

export default Showsearcheditem