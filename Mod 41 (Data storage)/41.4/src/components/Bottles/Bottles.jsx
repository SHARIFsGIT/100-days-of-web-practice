import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useState(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
        }
    }, [bottles])

    const handleAdd = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemove = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <Cart cart={cart} handleRemove = {handleRemove}></Cart>
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