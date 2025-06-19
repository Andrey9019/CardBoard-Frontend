export type NamedItem = {
  id: number;
  name: string;
};

export interface Category {
  name: string;
  display_name: string;
  values: NamedItem[];
}

export type Categories = Category[];
