import PropTypes from 'prop-types';
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-600 rounded-lg p-4 text-white text-center flex flex-col">
      <h2 className="my-4">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="pl-6 flex-grow">
      {
        features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
      }
      </div>
      <button className="mt-8 bg-green-500 w-full py-2 font-bold rounded-xl hover:bg-green-800">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
