import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart, handleRemove}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='cart-container'>
                {cart.map(bottle => <div key={bottle.id} >
                    <img src={bottle.image_url} alt="" />
                    <button onClick={() => handleRemove(bottle.id)}>Remove</button>
                </div> )}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default Cart;