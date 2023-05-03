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
            <button className={styles.button} type={props.type} onClick={props.event}>{props.children}</button>
        </>
    );
}

export default Button;