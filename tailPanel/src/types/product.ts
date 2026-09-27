export interface ProductInterface {
  id: number;
  name: string;
  sku: string;
  category: string;
  description: string;
  price: string;
  quantity: number;
  status: string;
  supplier: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface GetProductsResponse {
  message: string;
  products: ProductInterface[];
}