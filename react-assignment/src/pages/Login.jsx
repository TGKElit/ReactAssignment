import LoginForm from "../components/loginForm";

const Login = (props) => {


    return (
    <>
        <LoginForm action="/" method="" buttonText="Login"/>
        <LoginForm action="" method="get" buttonText="Register"/>
    </>
    )
}

export default Login;