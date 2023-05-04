import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

const GameCreation = (props) => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target.form);
        formData.append('api_key', sessionStorage.getItem("api_key"));
      
        fetch('http://ec2-16-16-99-212.eu-north-1.compute.amazonaws.com:8000/api/games', {
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
        <form action="">
            <input type="number" name="NOQ"/>
            <Button type="submit" handleClick={handleSubmit}>Start Game</Button>
        </form>
    )
}

export default GameCreation;