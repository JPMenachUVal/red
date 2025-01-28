// src/components/ProductCard.tsx
import { FC } from 'react';
import { Producto } from '../types/producto';

interface ProductCardProps {
  producto: Producto;
}

export const ProductCard: FC<ProductCardProps> = ({ producto }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-semibold text-gray-800">{producto.nombre}</h2>
    <p className="text-gray-600 mt-2">{producto.descripcion}</p>
    <p className="text-lg font-bold text-gray-800 mt-2">
      ${producto.precio.toFixed(2)}
    </p>
  </div>
);
