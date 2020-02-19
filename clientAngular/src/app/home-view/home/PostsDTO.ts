export interface PostObjDTO {
  success: boolean;
  posts: PostDTO[];
}

export interface PostDTO {
  _id: string;
  userName: string;
  image: string;
  title: string;
  text: string;
}
