import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useState(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);

    const handleAdd = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            <div className="bottle-container">
            {
                bottles.map(bottle =>
                <Bottle handleAdd = {handleAdd} key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};
export default Bottles;