
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  description: string;
  groupId?: string;
  coins: number;
  role: 'USER' | 'ADMIN';
}

export interface Feedback {
  id: string;
  content: string;
  file?: string;
  createdAt: string;
  reportCount: number;
  authorId: string;
  groupId?: string;
  isAnonymous: boolean;
}

export interface Group {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
} 