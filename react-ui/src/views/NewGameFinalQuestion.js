import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useNavigate } from "react-router-dom";

const NewGameFinalQuestion = () =>{
    //Final Question State
    const [gameTitle, setGameTitle] = useState("Loading")
    const [gameID, setGameID] = useState("")
    const[finalQuestion, setFinalQuestion] = useState("");
    const[finalAnswer, setFinalAnswer] = useState("");
    const navigate = useNavigate();

    //Fetch Game Title and ID
    useEffect(()=>{
        fetch('/api/games/latestgame',)
        .then(res => {
            return res.json();
        }).then(data =>{
            setGameID(data[0]._id)
            setGameTitle(data[0].title)
        }
        )
    },[])

    //Handle Round Submit
    const handleSubmit = (e) =>{
        e.preventDefault();

        let finalQuestionJSON = {
            "_id": gameID, 
            "title" : gameTitle,
            "round": null,
            "finalQuestion":{'question': finalQuestion, 'answer': finalAnswer}
        };
        
        fetch('/api/games/updategame', {
            method:'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(finalQuestionJSON)
            }).then(()=>{
                console.log("updated");
            })
        navigate("/");
    }

    return(
        <div>
            <h1>{gameTitle}</h1>
            <h2>Final Question</h2>
            <form onSubmit={handleSubmit}>
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
                            <button>
                                    Save and Continue
                            </button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    );
}

export default NewGameFinalQuestion;