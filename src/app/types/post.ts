export interface Post {
  _id: string;
  id_city: string;
  id_user: string;
  title: string;
  content: string;
  category: string;
  creationDate?: Date;
  likes: number;
  dislikes: number;
  numComments: number;
  mediaURL?: string;
}
