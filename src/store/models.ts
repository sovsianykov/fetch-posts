export interface Post {
  user?: string;
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string;
}
export interface AuthorState {
  authors: Author[];
  isLoading: boolean;
  error: string;
}

export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
