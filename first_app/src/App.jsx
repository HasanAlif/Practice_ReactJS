import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Counter from "../Counter.jsx";
import LikeButton from "../LikeButton.jsx";

function App() {
    return (
        <>
            <h1>BlockBuster Deals , Shop Now</h1>
            <ProductTab />
            <h1>States in React</h1>
            <Counter />
            <LikeButton />
        </>
    );
}

export default App;