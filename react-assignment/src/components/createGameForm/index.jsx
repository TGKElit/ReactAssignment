import { useNavigate } from 'react-router-dom';
import Button from "../button";
import styles from "./createGameForm.module.scss"

const CreateGameForm = (props) => {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target.form);
        formData.append('api_key', sessionStorage.getItem("api_key"));
      
        fetch('https://ec2-16-16-99-212.eu-north-1.compute.amazonaws.com/api/games', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("game_id", data.game_id);
            navigate('/question');
        })
        .catch(error => {
            console.error('Error:', error);
        });


    }

    return (
        <>
            <form className={styles.createGameForm}>
                <label>Number Of Questions</label>
                <input type="number" name="NOQ" min="1" max="5"/>
                <Button type="submit" handleClick={handleSubmit}>Start Game</Button>
            </form>
        </>
    );
}

export default CreateGameForm;