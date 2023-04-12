
import styles from './loginForm.module.scss';

const LoginForm = (props) => {
    return (
        <>
        <form className={styles.loginForm} action={props.action} method={props.method}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <button type="submit">{props.buttonText}</button>
        </form>    
        </>
    );
}

export default LoginForm;