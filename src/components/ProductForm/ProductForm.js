import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {
    return(
        <form>
          <OptionSize 
            size={props.size} 
            setSize={props.setSize} 
            sizes={props.sizes}/>
          <OptionColor 
            color={props.color} 
            colors={props.colors}
            setColor={props.setColor}/>
          <Button 
            className={styles.button} 
            name={props.name} 
            size={props.size} 
            price={props.priceFunction} 
            color={props.color}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
};

ProductForm.propTypes = {
    size:PropTypes.string,
    setSize:PropTypes.func,
    sizes:PropTypes.array,
    color:PropTypes.string,
    colors:PropTypes.array,
    setColor:PropTypes.func,
    name:PropTypes.string,
    priceFunction:PropTypes.func
}

export default ProductForm;