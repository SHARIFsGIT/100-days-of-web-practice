import { add, multiply, divideFirstNumberWithSecoundNumber as vaag } from '../../utilities/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';

const Sunglass = () => {
    const first = 55;
    const second = 59;
    const sum = add(first, second);
    const mult = multiply(sum, second);
    const devide = vaag(mult, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;