import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${slug}`
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [slug]);

  if (!product) {
    return <p>Loading product details...</p>;
  }
  //if(product.)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        Availability:
        {product.stock > 0 ? <div>In Stock</div> : <div>Out of Stock</div>}
      </p>
      <p>Price: ${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductScreen;
