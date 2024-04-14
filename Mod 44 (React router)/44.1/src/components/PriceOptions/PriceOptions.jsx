import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "1",
      name: "Basic",
      price: 9.99,
      features: [
        "Access to basic features",
        "Limited storage (5GB)",
        "Email support",
      ],
    },
    {
      id: "2",
      name: "Standard",
      price: 19.99,
      features: [
        "Access to standard features",
        "Moderate storage (15GB)",
        "Priority email support",
        "Mobile app access",
      ],
    },
    {
      id: "3",
      name: "Premium",
      price: 29.99,
      features: [
        "Access to premium features",
        "High storage (50GB)",
        "24/7 priority support",
        "Mobile and desktop app access",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
