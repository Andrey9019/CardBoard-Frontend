import Button from "@/components/ui/Button";
import { useGameByID } from "../hooks/useGamebyID";

export default function GameDetails() {
  const { game } = useGameByID();

  return (
    <div className="grid-cols-2 lg:grid">
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Опис</p>
        <p className="text-sm lg:text-base xl:text-lg">{game?.description}</p>
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Характеристики</p>
        <table className="w-full border-separate border-spacing-y-4 text-left text-sm lg:text-base">
          <tbody>
            {game?.publisher && (
              <tr>
                <td className="text-background">Видавець</td>
                <td className="xl:text-lg">{game.publisher.name}</td>
              </tr>
            )}
            {game?.duration && (
              <tr>
                <td className="text-background">Час партії</td>
                <td className="xl:text-lg">{game.duration.name}</td>
              </tr>
            )}
            {game?.player_count && (
              <tr>
                <td className="text-background">Гравців</td>
                <td className="xl:text-lg">{game.player_count.name}</td>
              </tr>
            )}
            {game?.age_group && (
              <tr>
                <td className="text-background">Вік</td>
                <td className="xl:text-lg">{game.age_group.name}</td>
              </tr>
            )}
            {game?.difficulty && (
              <tr>
                <td className="text-background">Складність гри</td>
                <td className="xl:text-lg">{game.difficulty.name}</td>
              </tr>
            )}
            {game?.genre && (
              <tr>
                <td className="text-background">Жанр гри</td>
                <td className="xl:text-lg">
                  {game.genre.map((g) => g.name).join(", ")}
                </td>
              </tr>
            )}
            {game?.mechanic && (
              <tr>
                <td className="text-background">Механіка гри</td>
                <td className="xl:text-lg">
                  {game.mechanic.map((m) => m.name).join(", ")}
                </td>
              </tr>
            )}
            {game?.release_year && (
              <tr>
                <td className="text-background">Рік випуску</td>
                <td className="xl:text-lg">
                  {new Date(game.release_year).getFullYear()}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Доставка</p>

        <p className="mb-4 text-sm lg:text-base xl:text-lg">
          Самовивіз з магазину
        </p>
        <p className="text-sm lg:text-base xl:text-lg">Детальніше</p>
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Відгуки</p>
        <p className="mb-4 text-sm lg:text-base xl:text-lg">
          Поки що ніхто не залишив відгуків
        </p>
        <div className="flex justify-end">
          <Button
            as="button"
            variant="secondary"
            text="Залиште свій відгук"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
