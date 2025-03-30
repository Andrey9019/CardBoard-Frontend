import AllGameList from "../components/AllGameList";
import Ping from "../components/Ping";

const Home = () => {
  return (
    <section>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
      <Ping />
      <AllGameList />
    </section>
  );
};

export default Home;
