export interface Game {
  id: number;
  title: string;
  description: string | null;
  rules_summary: string | null;
  release_year: string | null;
  price: number;
  discount_price: string | null;
  stock: number;
  amount: number | null;

  created_at: string;
  updated_at: string;

  genres: NamedItem[];
  types: NamedItem[];
  mechanics: NamedItem[];
  difficulty: NamedItem;
  player_count: NamedItem;
  age_group: NamedItem;
  duration: NamedItem;
  publisher: NamedItem;

  images: string[];
  thumbnail: string;
}

type NamedItem = {
  id: number;
  name: string;
};
