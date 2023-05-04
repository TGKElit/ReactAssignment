
import { useNavigate } from 'react-router';
import Button from '../button';
import styles from './questionForm.module.scss';

const QuestionForm = (props) => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target.form);
        formData.append('api_token', sessionStorage.getItem("api_key"));
        formData.append('game_id', sessionStorage.getItem("game_id"));
      
        fetch('http://127.0.0.1:8000/api/postAnswer', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            navigate('/answer', { state: { data } });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    return (
        <>
        <form className={styles.questionForm} action={props.action} method={props.method}>
            <div>
                <input type="radio" id="alt1" name="answer" value="1"/>
                <label htmlFor="alt1">{props.alt1}</label>
            </div>
            <div>
                <input type="radio" id="alt2" name="answer" value="2"/>
                <label htmlFor="alt2">{props.alt2}</label>
            </div>
            <div>
                <input type="radio" id="alt3" name="answer" value="3"/>
                <label htmlFor="alt3">{props.alt3}</label>
            </div>
            <div>
                <input type="radio" id="alt4" name="answer" value="4"/>
                <label htmlFor="alt4">{props.alt4}</label>
            </div>
            <Button type="submit" handleClick={handleSubmit}>Submit</Button>
        </form>    
        </>
    );
}

export default QuestionForm;