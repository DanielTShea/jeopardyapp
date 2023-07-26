import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NewGame = () => {
    //Game Title state
    const [gameTitle, setGameTitle] = useState("");

    return(
        <div style={{display:"flex", flexDirection: "column", justifyContent:"center"}}>
            <h1>New Game</h1>
            <div >
                <form style={{display:"flex",flexDirection: "column", justifyContent:"center"}}>
                    <label style={{flexGrow:1}}>Game Title: </label>
                    <input
                        style={{flexGrow:1}}
                        type="text"
                        value={gameTitle}
                        onChange={(e) => setGameTitle(e.target.value)}
                    >
                    </input>
                    <Button
                        style={{flexGrow:1}}
                        variant="contained"
                        component={Link} 
                        to="/newgameround1"
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