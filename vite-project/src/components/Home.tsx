// src/components/Home.tsx
import { useProductos } from '../hooks/useProductos';
import { ProductCard } from './ProductCard';
import { ErrorMessage } from './ErrorMessage';

const Home = () => {
  const { productos, error, loading } = useProductos();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bienvenido</h1>
        <p className="text-gray-600 mb-8">Inicio de sesión exitoso</p>

        {loading && <p className="text-gray-600">Cargando productos...</p>}
        {error && <ErrorMessage message={error} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;