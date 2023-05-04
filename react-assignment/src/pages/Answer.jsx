import {useLocation} from 'react-router-dom';
import Button from '../components/button';

const Answer = (props) => {
    const location = useLocation();
    let result = "Incorrect";
    let link = <Button type="link" href="/question">Next Question</Button>;
    let summary = "";
    let numberOfCorrectAnswers = 0;
    let numberOfQuestions = 0;
    if(location.state.data.gameDone){

        location.state.data.sumRes.forEach(element => {
            numberOfQuestions++;
            if(element.result === "correct"){
                numberOfCorrectAnswers++;
            }
        });

        summary = (
            <>
            <h2>Game Finished</h2>
            <p>Final Result: {numberOfCorrectAnswers} / {numberOfQuestions}</p>
            </>
        );
        link = <Button type="link" href="/">Home</Button>;
    }

    if(location.state.data.result){
        result = "Correct";
    }
    
    return (
        <>
            <h1>{result}</h1>
            {summary}
            {link}
        </>
    )
}

export default Answer;