import logo from './../logo.svg';

export default function Item() {
    return (
        <div className="App-item">
            <img  src={logo} className="App-item-image" alt="image" />
            <p>Name of the product</p>
            <small>Price of the product</small>
        </div>
    )
}
