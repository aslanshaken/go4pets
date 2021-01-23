import { useParams } from "react-router-dom";

function Showsearcheditem (props) {
    const params = useParams();

    return(
        <div>
            dfds
            {params.value}
            
        </div>
    )
}

export default Showsearcheditem