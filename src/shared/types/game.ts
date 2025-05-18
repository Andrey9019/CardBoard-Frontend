type NamedItem = {
  id: number;
  name: string;
};

export default interface Game {
  id: number;
  genre: NamedItem[];
  type: NamedItem[];
  mechanic: NamedItem[];
  difficulty: NamedItem;
  player_count: NamedItem;
  age_group: NamedItem;
  duration: NamedItem;
  publisher: NamedItem;
  title: string;
  description: string;
  rules_summary: string;
  release_year: string;
  price: number;
  discount_price: string;
  stock: number;
  created_at: string;
  updated_at: string;
  amount: number;
}
