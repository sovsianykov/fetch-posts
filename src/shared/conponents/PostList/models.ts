import { Post } from '../../../store/models';

export interface PostsProps {
  post: Post;
  author?: string;
  onClick(id:  number): void;
}
export interface PaginatorProps {
   page: number;
   incrementPage:()=>void;
   decrementPage:()=>void;
}