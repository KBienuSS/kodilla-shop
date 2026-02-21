import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  // [DONE] użyc metody map do wyrenderowania atrybutów i pętli do wyswietlenia wszystkich produktów a nie tylko dwóch wpisanych na sztywno
  return (
    <section>
  {products.map(product => (
    <Product 
      key={product.id}
      {...product}
    />
  ))}
</section>
  );
};

export default Products;