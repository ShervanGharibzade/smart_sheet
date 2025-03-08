import Home from "./(site)";
import RootLayout from "./layout";

const Root = () => {
  return (
    <RootLayout>
      <main>
        <Home />
      </main>
    </RootLayout>
  );
};

export default Root;
