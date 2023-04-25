import Button from '../components/button';
import QuestionForm from '../components/questionForm';

const Question = (props) => {

    return [
        <>
            <h1>Question</h1>
            <QuestionForm method="post" action="/api/answer" alt1="This is ex1" alt2="ex2" alt3="ex3" alt4="ex4"></QuestionForm>
            <Button>Quit</Button>
        </>
    ]
}

export default Question;