import Search from "./Search";

function Mainimage(props) {
    return (
        <div>

            <div className="mainImageCenter" >
                <img src="https://media.istockphoto.com/photos/cats-and-dogs-peeking-over-white-web-banner-picture-id1152482732?b=1&k=6&m=1152482732&s=612x612&w=0&h=JmY1tZPw58IfI4H9L5zipRwekExzdI5a1GddCPwn4bY="   alt="maini"/>
            </div>
            <Search />

            <div className="mainCircle" >
                <div id="mainCircleCenter">
                    <img src="https://img.icons8.com/cotton/64/000000/free-shipping.png" alt="a" />
                    <p>Free same day delivery</p>
                </div>
                <div id="mainCircleCenter">
                    <img src="https://img.icons8.com/cotton/64/000000/pickup-point.png" alt="b"/>
                    <p>Curbside Pickup</p>
                </div>
                <div id="mainCircleCenter">
                    <img src="https://img.icons8.com/cotton/64/000000/discount--v1.png"  alt="c"/>
                    <p>Buy 1 get 2nd 50% off</p>
                </div>
            </div>

        </div>
    )
}
export default Mainimage