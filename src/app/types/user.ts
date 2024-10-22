export interface User {
  id?: string;
  id_city: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password?: string;
  birthdate: Date;
  role: string;
  status: string;
  numFollowers: number;
  numFollowing: number;
  joinDate: Date;
  followers?: string[];
  following?: string[];
}
