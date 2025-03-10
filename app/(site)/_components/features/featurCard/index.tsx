const FeatureCard = ({
  feature,
}: {
  feature: {
    title: string;
    icon: string;
    description: string;
  };
}) => {
  return (
    <div className="max-w-[400px] w-full border rounded-lg p-5 h-[200px] hover:scale-105 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-3">{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
