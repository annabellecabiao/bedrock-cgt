import client from './client';

export async function fetchProducts() {
  const { data } = await client.get('/products');
  return data;
}

export async function fetchProduct(id) {
  const { data } = await client.get(`/products/${id}`);
  return data;
}