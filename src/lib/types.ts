export interface Event {
  title: string;
  slug: string;
  category: {
    name: string;
  };
  cover: {
    src: string;
    alt?: string;
  };
  date: string;
  description: string;
}
