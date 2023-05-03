import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const Button = (props) => {
    
    if (props.type == "link") {
        return (
            <Link className={styles.button} to={props.href}>{props.children}</Link>
        );
    }
    return (
        <>
            <button className={styles.button} type={props.type}>{props.children}</button>
        </>
    );
}

export default Button;