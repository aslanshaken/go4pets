import Nav from "./Nav"
import Items from "./Items";
import Brands from "./Brands"
import PetFacts from "./PetFacts";

function Home(props) {
    return (
        <div>

            {/* HEADER */}
            <Nav />
            <Items items={props.items} />
            <Brands />
            <PetFacts />

        </div>
    )
}

export default Home;