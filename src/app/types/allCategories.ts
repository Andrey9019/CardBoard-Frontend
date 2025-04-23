type NamedItem = {
  id: number;
  name: string;
  filter_url: string;
};

export default interface Categorires {
  name: string;
  display_name: string;
  values: NamedItem[];
}
