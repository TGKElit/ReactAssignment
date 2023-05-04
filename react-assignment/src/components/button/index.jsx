import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const Button = (props) => {
    
    if (props.type == "link") {
        return (
            <Link className={styles.button} to={props.href} onClick={props.handleClick}>{props.children}</Link>
        );
    }
    return (
        <>
            <button className={styles.button} onClick={props.handleClick}>{props.children}</button>
        </>
    );
}

export default Button;