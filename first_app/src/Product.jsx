import "./Product.css";
import Price from "./Price";

function Product({title,idx}) {
    let oldPrices = ["12,495", "8,495", "45,495", "35,495"];
    let newPrices = ["8,495", "5,495", "35,495", "25,495"];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>Product Description</p>
            <br />
            <br />
            <br />
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            <br />
            <button className="btn">Add to Cart</button>
        </div>
    );
}

export default Product;