import Button from "../components/button";
import QuestionForm from "../components/questionForm";

const Home = (props) => {
  if (sessionStorage.getItem("api_key") !== null) {
    return [
      <>
        <h1>Quizmaster</h1>
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
