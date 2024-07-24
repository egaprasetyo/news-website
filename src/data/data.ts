export interface News {
  source: {
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface CardProps extends News {
  index: number;
}

export interface HistoryNews {
  title: string;
  url: string;
  urlToImage: string;
}
