export interface Post {
  id: number;
  title: string;
  content: string;
  user: User | number;
}

export interface User {
  id: number;
  name: string;
  password: string;
  address: string;
  phone: number;
  posts?: Post[];
}
