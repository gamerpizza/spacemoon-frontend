import { Product } from "./product";
export interface Category {
  categoryId?: string;
  name: string;
  image: string;
  products: Product[];
  createdBy: string;
  createdAt?: number;
  updatedAt?: number;
}
