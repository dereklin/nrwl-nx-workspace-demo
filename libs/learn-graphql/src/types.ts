export interface Link {
  id?: string;
  description?: string;
  url?: string;
  createdAt?: string;
  postedBy?: User;
  votes?: Vote[];
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  votes?: Vote[];
}

export interface Vote {
  id?: string;
  user?: User;
  link?: Link;
}
