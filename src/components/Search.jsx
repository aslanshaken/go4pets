import { useState } from "react";
import { Route, Link } from "react-router-dom";
import Showsearcheditem from "./Showsearcheditem";


function Search() {
    const [searchedItem, setSearchedItem] = useState("")

    return (
        <div>
            <form >
            <Link to={`/search/${searchedItem}`}><button type="submit">Search</button></Link>
                <input
                    type="text"
                    value={searchedItem}
                    onChange={(e) => setSearchedItem(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search;