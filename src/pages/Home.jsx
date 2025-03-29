import { useEffect, useState } from "react";
import { fetchAllGames } from "../utils/api/all-games";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchAllGames();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    getGames();
  }, []);

  return (
    <section>
      <h1>Welcome to Home Page</h1>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <p>{game.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
