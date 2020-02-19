export interface LoginDTO {
    success: boolean;
    token: string;
    user: UserDTO;
    msg: string;
  }

export interface UserDTO {
    createdPosts: string[];
    _id: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    date: string;
    __v: number;
  }
