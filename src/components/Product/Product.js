import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  // [DONE] zamienić stałe dane na parametry 
  // [DONE] uzyc metody map 
  //wydzielic divy z opcjami koloru czy rozmiaru wydzielić do komponentów
  //zmienic pomysł nadawania kolorów dla opcji colors - elemt li ma klase dedykowaną z kolorem
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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =><li key={size.name}>
                <button 
                  type="button" 
                  className={clsx(currentSize === size['name'] && styles.active)} 
                  onClick={() => setCurrentSize(size['name'])} >
                  {size['name']}
                </button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
               {props.colors.map(color =><li key={color}>
                <button 
                  type="button" 
                  className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], currentColor === color && styles.active)} 
                  onClick={() => setCurrentColor(color)}/>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button} name={props.name} size={currentSize} price={getPrice()} color={currentColor}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  size:PropTypes.string,
  color:PropTypes.string
};

export default Product;