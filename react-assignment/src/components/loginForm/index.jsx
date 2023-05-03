
import styles from './loginForm.module.scss';
import Button from '../button'

const LoginForm = (props) => {
     const loginUser = async () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.status)
        .then(json => console.log(json))
     }


    return (
        <>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <button onClick={ loginUser }>Submit</button>    
        </>
    );
}

export default LoginForm;