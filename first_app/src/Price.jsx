export default function Price({oldPrice, newPrice}) {
    return (
        <div className="Product">
            <span><s>{oldPrice}</s></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{newPrice}</span>
        </div>
    );
}


