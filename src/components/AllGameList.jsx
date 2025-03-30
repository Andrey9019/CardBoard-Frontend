import { useEffect, useState } from "react";

import { getAllGames } from "../utils/api/getAllGame";
import { Link } from "react-router-dom";

export default function AllGameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await getAllGames();
        setGames(data);
      } catch (error) {
        console.log("error getGame", error);
      }
    };
    getGames();
  }, []);
  return (
    <section>
      <h1>All Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id} className="">
            <Link to={`/game/${game.id}`}>
              <div
                style={{
                  display: "flex",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <p>{game.title}</p> : <p>{game.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
