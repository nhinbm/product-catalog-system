export type Product = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  category: string;
  description: string;
  name: string;
  price: number;
  shop: string;
  color?: string;
  size?: string;
  stockQuantity?: number;
};
