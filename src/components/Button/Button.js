import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {

    const addToCart = (e) =>{
        e.preventDefault();
        console.log('Summary');
        console.log('==========');
        console.log('Name:',props.name,);
        console.log('Price:',props.price,);
        console.log('Size:',props.size,);
        console.log('Color:',props.color,);
    };

    return (<button onClick ={addToCart} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    size:PropTypes.string,
    color:PropTypes.string,
    name:PropTypes.string,
    price:PropTypes.number,
    className:PropTypes.string,
    children:PropTypes.object
}

export default Button;