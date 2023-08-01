import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const NewGame = () => {
    //Game Title state
    const [gameTitle, setGameTitle] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newGameTitle = gameTitle;
        console.log(newGameTitle)
        fetch('')
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
                        Submit
                    </button>
                    <Button
                        style={{flexGrow:1}}
                        variant="contained"
                        //onClick={handleSubmit}
                        key="1"
                        xs={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Save and Continue
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default NewGame;