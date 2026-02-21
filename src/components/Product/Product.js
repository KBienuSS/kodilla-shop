import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  // [DONE] zamienić stałe dane na parametry 
  // [DONE] uzyc metody map 
  // [DONE] wydzielic divy z opcjami koloru czy rozmiaru wydzielić do komponentów
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]['name']);

  const getPrice = () =>{
    const currentSizeData = props.sizes.find(size => size.name === currentSize);
    const additionalPrice = currentSizeData?.additionalPrice;
    const totalPrice = props.basePrice + additionalPrice;
    return totalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage 
        title={props.title} 
        name={props.name} 
        color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm 
          name={props.name}
          color={currentColor} 
          size={currentSize} 
          setColor={setCurrentColor} 
          setSize={setCurrentSize} 
          priceFunction={getPrice} 
          sizes={props.sizes} 
          colors={props.colors}/>
      </div>
    </article>
  )
};

Product.propTypes = {
    sizes:PropTypes.array,
    colors:PropTypes.array,
    name:PropTypes.string,
    basePrice:PropTypes.number,
    title:PropTypes.string
}

export default Product;