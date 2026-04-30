// all the types at one place

export type Post = {
  id: number;
  userId: number;
  title: string;
  description: string;
};

export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
  company: { name: string };
};

export type Album = {
  id: number;
  userId: number;
  title: string;
};
