import { useState } from "react";
import { fetchPing } from "../utils/api/ping";

export default function Ping() {
  const [pingMessage, setPingMessage] = useState("");

  const handlePing = async () => {
    try {
      const data = await fetchPing();
      console.log("Ping:", data);
      setPingMessage(data.message || "Ping successful!"); // Переконаємось, що є значення
    } catch (error) {
      console.error("Error fetching ping:", error);
      setPingMessage("Error fetching ping");
    }
  };

  return (
    <section className="flex items-center justify-center">
      <button onClick={handlePing} className="border border-primary p-2">
        Ping
      </button>
      <p>{pingMessage}</p>
    </section>
  );
}
