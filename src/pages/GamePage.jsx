import { useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../utils/api/getGameById";
import { useEffect } from "react";

export default function GamePage() {
  const { id } = useParams();
  console.log("id", id);

  const [game, setGame] = useState(null);

  useEffect(() => {
    const getGame = async () => {
      try {
        const data = await getGameById(id);
        console.log(data);
        setGame(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGame();
  }, []);

  return (
    <section>
      <h1>Welcome to Game Page</h1>
      <p>This is the game page content.</p>
      <p>Game ID: {id}</p>
      <p>Game Title: {game?.title}</p>
      <p>{game?.description}</p>
      <p>{game?.difficulty.name}</p>
      <p>{game?.player_count.name}</p>
      <p>{game?.age_group.name}</p>
      <p>{game?.rules_summary}</p>
    </section>
  );
}
