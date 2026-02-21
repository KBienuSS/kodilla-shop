import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = props =>{
    // zmienic pomysł nadawania kolorów dla opcji colors - elemt li ma klase dedykowaną z kolorem
    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
               {props.colors.map(color =><li key={color}>
                <button 
                  type="button" 
                  className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], props.color === color && styles.active)} 
                  onClick={() => props.setColor(color)}/>
                </li>)}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    color:PropTypes.string,
    colors:PropTypes.array,
    setColor:PropTypes.func
}

export default OptionColor;