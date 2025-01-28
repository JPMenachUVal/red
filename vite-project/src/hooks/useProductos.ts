// src/hooks/useProductos.ts
import { useState, useEffect } from 'react';
import { Producto } from '../types/producto';
import { getProductos } from '../services/api';

export const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return { productos, error, loading };
};