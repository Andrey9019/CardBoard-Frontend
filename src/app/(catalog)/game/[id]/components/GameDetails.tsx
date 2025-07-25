import Button from "@/components/ui/Button";
import { Game } from "@/shared/types/game";

interface GameDetailsProps {
  game: Game;
}

export default function GameDetails({ game }: GameDetailsProps) {
  return (
    <div className="grid-cols-2 gap-10 lg:grid">
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Опис</p>
        <p className="text-sm lg:text-base xl:text-lg">{game.rules_summary}</p>
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Характеристики</p>
        <table className="w-full border-separate border-spacing-y-4 text-left text-sm lg:text-base">
          <tbody className="">
            {game.genres && (
              <tr className="">
                <td className="text-background border-primary/40 border-b">
                  Жанр гри
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.genres.map((g) => g.name).join(", ")}
                </td>
              </tr>
            )}
            {game.mechanics && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Механіка гри
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.mechanics.map((m) => m.name).join(", ")}
                </td>
              </tr>
            )}
            {game.difficulty && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Складність гри
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.difficulty.name}
                </td>
              </tr>
            )}
            {game.duration && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Час партії
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.duration.name}
                </td>
              </tr>
            )}
            {game.player_count && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Гравців
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.player_count.name}
                </td>
              </tr>
            )}
            {game.age_group && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Вік
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.age_group.name}
                </td>
              </tr>
            )}
            {game.release_year && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Рік випуску
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {new Date(game.release_year).getFullYear()} рік
                </td>
              </tr>
            )}
            {game.publisher && (
              <tr>
                <td className="border-primary/40 text-background border-b">
                  Видавець
                </td>
                <td className="border-primary/40 border-b xl:text-lg">
                  {game.publisher.name}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Доставка</p>

        <p className="mb-4 text-sm lg:text-base xl:text-lg">
          Здійснюється Новою Поштою по всій Україні. Вартість доставки залежить
          від тарифів перевізника та обраного способу доставки.
        </p>
        {/* <p className="text-sm lg:text-base xl:text-lg">Детальніше</p> */}
      </div>
      <div className="mb-12 lg:mb-16">
        <p className="mb-6 text-2xl font-semibold">Відгуки</p>
        <p className="mb-4 text-sm lg:text-base xl:text-lg">
          Поки що ніхто не залишив відгуків
        </p>
        <div className="flex justify-end">
          <Button variant="secondary" text="Залиште свій відгук" disabled />
        </div>
      </div>
    </div>
  );
}
