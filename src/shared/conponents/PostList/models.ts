import { Post } from '../../../store/models';

export interface PostsProps {
  post: Post;
  onClick(id:  number): void;
}