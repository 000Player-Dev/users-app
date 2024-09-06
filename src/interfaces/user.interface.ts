export interface User {
  id: number;
  username: string;
  gender: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  nat: string;
  friends: Friends[];
  description: string;
}

interface Friends {
  id: number;
  name: string;
}
