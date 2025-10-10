export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
  category: Category;
  isAvailable: boolean;
  isFeatured: boolean;
  preparationTime: number;
  calories: number | null;
  ingredients: string | null;
  createdAt: string;
}