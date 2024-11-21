export interface Post {
  _id: string;
  id_city: string;
  id_user: string;
  username: string;
  title: string;
  content: string;
  category: string;
  creationDate?: Date;
  likes: number;
  likesIds: string[];
  numComments: number;
  mediaURL?: string;
}
