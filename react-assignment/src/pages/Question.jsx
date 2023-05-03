import { useState, useEffect } from 'react';
import Button from '../components/button';
import QuestionForm from '../components/questionForm';

const Question = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/question?game_id=' + '2' + '&api_key=' + 'iVRQrWPJFuNQP3D9LrEqlMCs6VkYQEUVfhGClenrOFAtuZtfAUgdzWsowtSH')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    });

    return [
        <>
            <h1>{data.the_question}</h1>
            <QuestionForm method="post" action="/answer" alt1={data.alt_1} alt2={data.alt_2} alt3={data.alt_3} alt4={data.alt_4}></QuestionForm>
            <Button type="link" href="/">Quit</Button>
        </>
    ]
}

export default Question;