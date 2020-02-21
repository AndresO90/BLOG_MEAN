export interface UserDTO {
    user: User;
  }

export interface User {
    createdPosts: string[];
    _id: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    date: string;
    __v: number;
  }
