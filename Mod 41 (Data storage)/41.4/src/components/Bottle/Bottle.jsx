import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({bottle, handleAdd}) => {
    const {name, volume_ml, color, image_url} = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <h4>Price: ${volume_ml}</h4>
            <p>Color: {color}</p>
            <img src={image_url} alt="" />
            <button onClick={() => handleAdd(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired
};

export default Bottle;