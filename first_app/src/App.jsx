import "./App.css";
import LoduBoard from "./LudoBoard";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
    return (
        <>
            <Navbar />
            <div className="cards">
                <Card title="Card-1" Description="This is Card-1"/>
                <Card title="Card-2" Description="This is Card-2"/>
                <Card title="Card-3" Description="This is Card-3"/>
                <Card title="Card-4" Description="This is Card-4"/>
                <Card title="Card-5" Description="This is Card-5"/>
            </div>
            <LoduBoard />
            <Footer />
        </>
    );
}

export default App;

