// src/services/api.ts
import { Producto } from '../types/producto';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const getProductos = async (): Promise<Producto[]> => {
  const response = await fetch(`${API_URL}/productos`);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return response.json();
};