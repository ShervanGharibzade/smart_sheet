import FeatureCard from "./featurCard";

const featuresContent = [
  {
    title: "Simple Data Import",
    icon: "upload",
    description:
      "Effortlessly upload CSV files or import data from various sources with just a few clicks. Get started with your data analysis instantly.",
  },
  {
    title: "Transform Raw Data into Insights",
    icon: "chart-bar",
    description:
      "Turn your raw data into meaningful, actionable insights. Smarsheet helps you spot trends and opportunities that drive smarter business decisions.",
  },
  {
    title: "Automate Your Reports",
    icon: "cogs",
    description:
      "Save time by automating regular reports. Smarsheet generates reports on your schedule, so you always have the latest data at your fingertips.",
  },
  {
    title: "API Integrations Made Easy",
    icon: "link",
    description:
      "Connect Smarsheet with your existing tools and data sources using our simple API integrations, enabling real-time data analysis and reporting.",
  },
  {
    title: "Visualize Data on a Clear Dashboard",
    icon: "dashboard",
    description:
      "View your data in a user-friendly dashboard that simplifies complex analytics. Track key metrics, visualize trends, and make data-driven decisions with ease.",
  },
  {
    title: "Collaborate and Share Insights",
    icon: "users",
    description:
      "Share your reports and insights with your team in real-time. Collaborate on data-driven decisions and ensure everyone is on the same page.",
  },
];

const Features = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-4xl font-bold uppercase my-20">
        Features
      </h2>
      <div className="grid grid-cols-3 gap-10 mx-auto w-fit">
        {featuresContent.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Features;
