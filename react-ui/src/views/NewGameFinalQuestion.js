import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const NewGameFinalQuestion = () =>{
    //Final Question State
    const[finalQuestion, setFinalQuestion] = useState("");
    const[finalAnswer, setFinalAnswer] = useState("");

    return(
        <div>
            <h2>Final Question</h2>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <label>Final Question: </label>
                    <textarea
                    value={finalQuestion}
                    onChange={(e) => setFinalQuestion(e.target.value)}>
                    </textarea>
                    </Grid>
                    <Grid item xs={6}>
                    <label>Final Answer: </label>
                    <textarea
                    value={finalAnswer}
                    onChange={(e) => setFinalAnswer(e.target.value)}>
                    </textarea>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            component={Link} 
                            to="/newgameround2"
                            key="1"
                            xs={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Save and Continue
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default NewGameFinalQuestion;