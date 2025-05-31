import api from './api';

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
  cost: number;
  userId: string;
}

export interface CreateProductData {
  name: string;
  description?: string;
  image?: string;
  cost: number;
}

const productService = {
  async getProducts(): Promise<Product[]> {
    const { data } = await api.get<Product[]>('/products');
    return data;
  },

  async getProductById(id: string): Promise<Product> {
    const { data } = await api.get<Product>(`/products/${id}`);
    return data;
  },

  async getUserProducts(userId: string): Promise<Product[]> {
    const { data } = await api.get<Product[]>(`/users/${userId}/products`);
    return data;
  },

  async createProduct(data: CreateProductData): Promise<Product> {
    const { data: responseData } = await api.post<Product>('/products', data);
    return responseData;
  },

  async updateProduct(id: string, data: Partial<CreateProductData>): Promise<Product> {
    const { data: responseData } = await api.patch<Product>(`/products/${id}`, data);
    return responseData;
  },

  async deleteProduct(id: string): Promise<void> {
    await api.delete(`/products/${id}`);
  },
};

export default productService; 