
import Button from '../button';
import styles from './questionForm.module.scss';

const QuestionForm = (props) => {
    return (
        <>
        <form className={styles.questionForm} action={props.action} method={props.method}>
            <div>
                <input type="radio" id="alt1" name="question-alternatives"/>
                <label htmlFor="alt1">{props.alt1}</label>
            </div>
            <div>
                <input type="radio" id="alt2" name="question-alternatives"/>
                <label htmlFor="alt2">{props.alt2}</label>
            </div>
            <div>
                <input type="radio" id="alt3" name="question-alternatives"/>
                <label htmlFor="alt3">{props.alt3}</label>
            </div>
            <div>
                <input type="radio" id="alt4" name="question-alternatives"/>
                <label htmlFor="alt4">{props.alt4}</label>
            </div>
            <Button type="submit">Submit</Button>
        </form>    
        </>
    );
}

export default QuestionForm;