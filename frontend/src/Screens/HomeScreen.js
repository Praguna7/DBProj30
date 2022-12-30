import axios from 'axios';
import { useState, useEffect } from 'react';

function HomeScreen() {
  const [products, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8000/api/products');
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.slug}>
          <a href={`/product/${product.slug}`}>
            <p>{product.name}</p>
          </a>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
export default HomeScreen;
