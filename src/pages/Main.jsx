import AllGameList from "../components/AllGameList";
import Ping from "../components/Ping";

export default function Main() {
  return (
    <section>
      <h1>Welcome to Mian Page</h1>
      <p>This is the Mian page content.</p>
      <Ping />
      <AllGameList />
    </section>
  );
}
