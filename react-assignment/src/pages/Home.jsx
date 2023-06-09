import Button from "../components/button";

const Home = (props) => {

  function logout() {
    sessionStorage.clear();
    window.location.reload(false);
  }

  if (sessionStorage.getItem("api_key") !== null) {
    return [
      <>
        <h1>Quizmaster</h1>
        <Button type="link" href="/game-creation">New Game</Button>
        <Button handleClick={logout}>Logout</Button>
      </>,
    ];
  } else {
    return [
      <>
        <h1>Quizmaster</h1>
        <Button type="link" href="/login">
          Login
        </Button>
        <Button type="link" href="/register">
          Register
        </Button>
      </>,
    ];
  }
};

export default Home;
