import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const NewGame = () => {
    //Game Title state
    const [gameTitle, setGameTitle] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newGameTitle = {"title" : gameTitle};
        console.log(newGameTitle)
        console.log(JSON.stringify(newGameTitle))

        fetch('/api/games/newgame', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newGameTitle)
        }).then(()=>{
            console.log("new game added");
        })
        navigate("/newgameround1");
    }

    return(
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center"}}>
            <h1>New Game</h1>
            <div >
                <form  onSubmit={handleSubmit}style={{display:"flex",flexDirection: "column", justifyContent:"center"}}>
                    <label style={{flexGrow:1}}>Game Title: </label>
                    <input
                        style={{flexGrow:1}}
                        type="text"
                        required
                        value={gameTitle}
                        onChange={(e) => setGameTitle(e.target.value)}
                    >
                    </input>
                    <button>
                        Create New Game
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewGame;