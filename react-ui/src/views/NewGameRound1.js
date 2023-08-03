import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const NewGameRound1 = () =>{
    //Game Title & ID state
    const [gameTitle, setGameTitle] = useState("Loading")
    const [gameID, setGameID] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    //Round 1 Category states
    const [R1C1, setR1C1] = useState("");
    const [R1C2, setR1C2] = useState("");
    const [R1C3, setR1C3] = useState("");
    const [R1C4, setR1C4] = useState("");
    const [R1C5, setR1C5] = useState("");
    const [R1C6, setR1C6] = useState("");

    //Round 1 Category 1 Questions and Answers
    const [R1C1Q1, setR1C1Q1] = useState("")
    const [R1C1A1, setR1C1A1] = useState("")
    const [R1C1Q2, setR1C1Q2] = useState("")
    const [R1C1A2, setR1C1A2] = useState("")
    const [R1C1Q3, setR1C1Q3] = useState("")
    const [R1C1A3, setR1C1A3] = useState("")
    const [R1C1Q4, setR1C1Q4] = useState("")
    const [R1C1A4, setR1C1A4] = useState("")
    const [R1C1Q5, setR1C1Q5] = useState("")
    const [R1C1A5, setR1C1A5] = useState("")

    //Round 1 Category 2 Questions and Answers
    const [R1C2Q1, setR1C2Q1] = useState("")
    const [R1C2A1, setR1C2A1] = useState("")
    const [R1C2Q2, setR1C2Q2] = useState("")
    const [R1C2A2, setR1C2A2] = useState("")
    const [R1C2Q3, setR1C2Q3] = useState("")
    const [R1C2A3, setR1C2A3] = useState("")
    const [R1C2Q4, setR1C2Q4] = useState("")
    const [R1C2A4, setR1C2A4] = useState("")
    const [R1C2Q5, setR1C2Q5] = useState("")
    const [R1C2A5, setR1C2A5] = useState("")

    //Round 1 Category 3 Questions and Answers
    const [R1C3Q1, setR1C3Q1] = useState("")
    const [R1C3A1, setR1C3A1] = useState("")
    const [R1C3Q2, setR1C3Q2] = useState("")
    const [R1C3A2, setR1C3A2] = useState("")
    const [R1C3Q3, setR1C3Q3] = useState("")
    const [R1C3A3, setR1C3A3] = useState("")
    const [R1C3Q4, setR1C3Q4] = useState("")
    const [R1C3A4, setR1C3A4] = useState("")
    const [R1C3Q5, setR1C3Q5] = useState("")
    const [R1C3A5, setR1C3A5] = useState("")


    //Round 1 Category 4 Questions and Answers
    const [R1C4Q1, setR1C4Q1] = useState("")
    const [R1C4A1, setR1C4A1] = useState("")
    const [R1C4Q2, setR1C4Q2] = useState("")
    const [R1C4A2, setR1C4A2] = useState("")
    const [R1C4Q3, setR1C4Q3] = useState("")
    const [R1C4A3, setR1C4A3] = useState("")
    const [R1C4Q4, setR1C4Q4] = useState("")
    const [R1C4A4, setR1C4A4] = useState("")
    const [R1C4Q5, setR1C4Q5] = useState("")
    const [R1C4A5, setR1C4A5] = useState("")

    //Round 1 Category 5 Questions and Answers
    const [R1C5Q1, setR1C5Q1] = useState("")
    const [R1C5A1, setR1C5A1] = useState("")
    const [R1C5Q2, setR1C5Q2] = useState("")
    const [R1C5A2, setR1C5A2] = useState("")
    const [R1C5Q3, setR1C5Q3] = useState("")
    const [R1C5A3, setR1C5A3] = useState("")
    const [R1C5Q4, setR1C5Q4] = useState("")
    const [R1C5A4, setR1C5A4] = useState("")
    const [R1C5Q5, setR1C5Q5] = useState("")
    const [R1C5A5, setR1C5A5] = useState("")

    //Round 1 Category 6 Questions and Answers
    const [R1C6Q1, setR1C6Q1] = useState("")
    const [R1C6A1, setR1C6A1] = useState("")
    const [R1C6Q2, setR1C6Q2] = useState("")
    const [R1C6A2, setR1C6A2] = useState("")
    const [R1C6Q3, setR1C6Q3] = useState("")
    const [R1C6A3, setR1C6A3] = useState("")
    const [R1C6Q4, setR1C6Q4] = useState("")
    const [R1C6A4, setR1C6A4] = useState("")
    const [R1C6Q5, setR1C6Q5] = useState("")
    const [R1C6A5, setR1C6A5] = useState("")

    //Daily Double States
    const [R1DD, setR1DD] = useState("111");

    //Tab State and Effects
    const [tabR1Value, setTabR1Value] = useState('0');
    const handleTabR1ValueChange = (event, newTabValue) =>{
        setTabR1Value(newTabValue);
    }

    //Fetch Game Title and ID
    useEffect(()=>{
        fetch('/api/games/latestgame',)
        .then(res => {
            return res.json();
        }).then(data =>{
            setGameID(data[0]._id)
            setGameTitle(data[0].title)
            setIsLoading(false)
        }
        )
    },[])

    //Handle Round Submit
    const handleSubmit = (e) =>{
        e.preventDefault();

        let gameRound1 = {"_id": gameID, 
        "title" : gameTitle, 
        "round":[
            {
            "roundNumber": 1,
            "category": [
                {"categoryNumber": 1, "categoryTitle": R1C1},
                {"categoryNumber": 2, "categoryTitle": R1C2},
                {"categoryNumber": 3, "categoryTitle": R1C3},
                {"categoryNumber": 4, "categoryTitle": R1C4},
                {"categoryNumber": 5, "categoryTitle": R1C5},
                {"categoryNumber": 6, "categoryTitle": R1C6},
                ],
            "question":[
                {"questionID": "R1C1Q1", "question": R1C1Q1, "answer": R1C1A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C1Q2", "question": R1C1Q2, "answer": R1C1A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C1Q3", "question": R1C1Q3, "answer": R1C1A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C1Q4", "question": R1C1Q4, "answer": R1C1A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C1Q5", "question": R1C1Q5, "answer": R1C1A5, "value": 1000, "dailyDouble": false},

                {"questionID": "R1C2Q1", "question": R1C2Q1, "answer": R1C2A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C2Q2", "question": R1C2Q2, "answer": R1C2A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C2Q3", "question": R1C2Q3, "answer": R1C2A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C2Q4", "question": R1C2Q4, "answer": R1C2A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C2Q5", "question": R1C2Q5, "answer": R1C2A5, "value": 1000, "dailyDouble": false},

                {"questionID": "R1C3Q1", "question": R1C3Q1, "answer": R1C3A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C3Q2", "question": R1C3Q2, "answer": R1C3A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C3Q3", "question": R1C3Q3, "answer": R1C3A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C3Q4", "question": R1C3Q4, "answer": R1C3A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C3Q5", "question": R1C3Q5, "answer": R1C3A5, "value": 1000, "dailyDouble": false},

                {"questionID": "R1C4Q1", "question": R1C4Q1, "answer": R1C4A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C4Q2", "question": R1C4Q2, "answer": R1C4A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C4Q3", "question": R1C4Q3, "answer": R1C4A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C4Q4", "question": R1C4Q4, "answer": R1C4A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C4Q5", "question": R1C4Q5, "answer": R1C4A5, "value": 1000, "dailyDouble": false},

                {"questionID": "R1C5Q1", "question": R1C5Q1, "answer": R1C5A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C5Q2", "question": R1C5Q2, "answer": R1C5A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C5Q3", "question": R1C5Q3, "answer": R1C5A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C5Q4", "question": R1C5Q4, "answer": R1C5A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C5Q5", "question": R1C5Q5, "answer": R1C5A5, "value": 1000, "dailyDouble": false},

                {"questionID": "R1C6Q1", "question": R1C6Q1, "answer": R1C6A1, "value": 200, "dailyDouble": false},
                {"questionID": "R1C6Q2", "question": R1C6Q2, "answer": R1C6A2, "value": 400, "dailyDouble": false},
                {"questionID": "R1C6Q3", "question": R1C6Q3, "answer": R1C6A3, "value": 600, "dailyDouble": false},
                {"questionID": "R1C6Q4", "question": R1C6Q4, "answer": R1C6A4, "value": 800, "dailyDouble": false},
                {"questionID": "R1C6Q5", "question": R1C6Q5, "answer": R1C6A5, "value": 1000, "dailyDouble": false},
            ]
        }],
        "finalQuestion":null
        };
        //convert DD option to object value
        const convertDD = (R1DD,gameRound1)=>{
            let R1DDString = `${R1DD}`
            let questionID = "R1C"+R1DDString[1]+"Q"+R1DDString[2]
            let questionIndex = gameRound1.round[0].question.findIndex((e) => e.questionID === questionID);
            gameRound1.round[0].question[questionIndex].dailyDouble = true
        }
        convertDD(R1DD, gameRound1)

        console.log(JSON.stringify(gameRound1));
        
        fetch('/api/games/updategame', {
            method:'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(gameRound1)
            }).then(()=>{
                console.log("updated");
            })
        navigate("/newgameround2");
    }

    //Form objects
    //Round 1
    const r1C1QsAndAs = [ 
        {"key": "R1C1Q1", "type": "200 Question: ", "value": R1C1Q1, "setState": setR1C1Q1},
        {"key": "R1C1A1", "type": "200 Answer: ", "value": R1C1A1, "setState": setR1C1A1},
        {"key": "R1C1Q2","type": "400 Question: " , "value": R1C1Q2, "setState": setR1C1Q2},
        {"key": "R1C1A2", "type": "400 Answer: ", "value":R1C1A2 , "setState": setR1C1A2},
        {"key": "R1C1Q3", "type": "600 Question: ", "value": R1C1Q3, "setState": setR1C1Q3 },
        {"key": "R1C1A3", "type": "600 Answer: ", "value": R1C1A3 , "setState": setR1C1A3},
        {"key": "R1C1Q4", "type": "800 Question: ", "value": R1C1Q4 , "setState": setR1C1Q4 },
        {"key": "R1C1A4", "type": "800 Answer: ", "value": R1C1A4 , "setState": setR1C1A4 },
        {"key": "R1C1Q5", "type": "1000 Question: ", "value": R1C1Q5, "setState": setR1C1Q5},
        {"key": "R1C1A5", "type": "1000 Answer: ", "value": R1C1A5 , "setState": setR1C1A5 }]
    
    const r1C2QsAndAs = [ 
        {"key": "R1C2Q1", "type": "200 Question: ", "value": R1C2Q1, "setState": setR1C2Q1},
        {"key": "R1C2A1", "type": "200 Answer: ", "value": R1C2A1, "setState": setR1C2A1},
        {"key": "R1C2Q2", "type": "400 Question: " , "value": R1C2Q2, "setState": setR1C2Q2},
        {"key": "R1C2A2", "type": "400 Answer: ", "value":R1C2A2 , "setState": setR1C2A2},
        {"key": "R1C2Q3", "type": "600 Question: ", "value": R1C2Q3, "setState": setR1C2Q3 },
        {"key": "R1C2A3","type": "600 Answer: ", "value": R1C2A3 , "setState": setR1C2A3},
        {"key": "R1C2Q4", "type": "800 Question: ", "value": R1C2Q4 , "setState": setR1C2Q4 },
        {"key": "R1C2A4", "type": "800 Answer: ", "value": R1C2A4 , "setState": setR1C2A4 },
        {"key": "R1C2Q5", "type": "1000 Question: ", "value": R1C2Q5, "setState": setR1C2Q5},
        {"key": "R1C2A5", "type": "1000 Answer: ", "value": R1C2A5 , "setState": setR1C2A5 }]

    const r1C3QsAndAs = [ 
        {"key": "R1C3Q1", "type": "200 Question: ", "value": R1C3Q1, "setState": setR1C3Q1},
        {"key": "R1C3A1", "type": "200 Answer: ", "value": R1C3A1, "setState": setR1C3A1},
        {"key": "R1C3Q2", "type": "400 Question: " , "value": R1C3Q2, "setState": setR1C3Q2},
        {"key": "R1C3A2", "type": "400 Answer: ", "value":R1C3A2 , "setState": setR1C3A2},
        {"key": "R1C3Q3", "type": "600 Question: ", "value": R1C3Q3, "setState": setR1C3Q3 },
        {"key": "R1C3A3", "type": "600 Answer: ", "value": R1C3A3 , "setState": setR1C3A3},
        {"key": "R1C3Q4", "type": "800 Question: ", "value": R1C3Q4 , "setState": setR1C3Q4 },
        {"key": "R1C3A4", "type": "800 Answer: ", "value": R1C3A4 , "setState": setR1C3A4 },
        {"key": "R1C3Q5", "type": "1000 Question: ", "value": R1C3Q5, "setState": setR1C3Q5},
        {"key": "R1C3A5", "type": "1000 Answer: ", "value": R1C3A5 , "setState": setR1C3A5 }]
    
    const r1C4QsAndAs = [ 
        {"key": "R1C4Q1", "type": "200 Question: ", "value": R1C4Q1, "setState": setR1C4Q1},
        {"key": "R1C4A1", "type": "200 Answer: ", "value": R1C4A1, "setState": setR1C4A1},
        {"key": "R1C4Q2", "type": "400 Question: " , "value": R1C4Q2, "setState": setR1C4Q2},
        {"key": "R1C4A2", "type": "400 Answer: ", "value":R1C4A2 , "setState": setR1C4A2},
        {"key": "R1C4Q3", "type": "600 Question: ", "value": R1C4Q3, "setState": setR1C4Q3 },
        {"key": "R1C4A3", "type": "600 Answer: ", "value": R1C4A3 , "setState": setR1C4A3},
        {"key": "R1C4Q4", "type": "800 Question: ", "value": R1C4Q4 , "setState": setR1C4Q4 },
        {"key": "R1C4A4", "type": "800 Answer: ", "value": R1C4A4 , "setState": setR1C4A4 },
        {"key": "R1C4Q5", "type": "1000 Question: ", "value": R1C4Q5, "setState": setR1C4Q5},
        {"key": "R1C4A5", "type": "1000 Answer: ", "value": R1C4A5 , "setState": setR1C4A5 }]
    
    const r1C5QsAndAs = [ 
        {"key": "R1C5Q1", "type": "200 Question: ", "value": R1C5Q1, "setState": setR1C5Q1},
        {"key": "R1C5A1", "type": "200 Answer: ", "value": R1C5A1, "setState": setR1C5A1},
        {"key": "R1C5Q2", "type": "400 Question: " , "value": R1C5Q2, "setState": setR1C5Q2},
        {"key": "R1C5A2", "type": "400 Answer: ", "value":R1C5A2 , "setState": setR1C5A2},
        {"key": "R1C5Q3", "type": "600 Question: ", "value": R1C5Q3, "setState": setR1C5Q3 },
        {"key": "R1C5A3", "type": "600 Answer: ", "value": R1C5A3 , "setState": setR1C5A3},
        {"key": "R1C5Q4", "type": "800 Question: ", "value": R1C5Q4 , "setState": setR1C5Q4 },
        {"key": "R1C5A4", "type": "800 Answer: ", "value": R1C5A4 , "setState": setR1C5A4 },
        {"key": "R1C5Q5", "type": "1000 Question: ", "value": R1C5Q5, "setState": setR1C5Q5},
        {"key": "R1C5A5", "type": "1000 Answer: ", "value": R1C5A5 , "setState": setR1C5A5 }]
    
    const r1C6QsAndAs = [
        {"key": "R1C6Q1", "type": "200 Question: ", "value": R1C6Q1, "setState": setR1C6Q1},
        {"key": "R1C6A1", "type": "200 Answer: ", "value": R1C6A1, "setState": setR1C6A1},
        {"key": "R1C6Q2", "type": "400 Question: ","value": R1C6Q2, "setState": setR1C6Q2},
        {"key": "R1C6A2", "type": "400 Answer: ", "value":R1C6A2 , "setState": setR1C6A2},
        {"key": "R1C6Q3", "type": "600 Question: ", "value": R1C6Q3, "setState": setR1C6Q3 },
        {"key": "R1C6A3", "type": "600 Answer: ", "value": R1C6A3 , "setState": setR1C6A3},
        {"key": "R1C6Q4", "type": "800 Question: ", "value": R1C6Q4 , "setState": setR1C6Q4 },
        {"key": "R1C6A4", "type": "800 Answer: ", "value": R1C6A4 , "setState": setR1C6A4 },
        {"key": "R1C6Q5", "type": "1000 Question: ", "value": R1C6Q5, "setState": setR1C6Q5},
        {"key": "R1C6A5", "type": "1000 Answer: ", "value": R1C6A5 , "setState": setR1C6A5 }]
    
    //Daily Double
    //Round 1
    const r1DDOptions = 
    [{"qNumber": 111, "name": "Category 1, 200 Question"}, {"qNumber": 112, "name": "Category 1, 400 Question"},{"qNumber": 113, "name": "Category 1, 600 Question"},
    {"qNumber": 114, "name": "Category , 800 Question"}, {"qNumber": 115, "name": "Category 1, 1000 Question"},

    {"qNumber": 121, "name": "Category 2, 200 Question"}, {"qNumber": 122, "name": "Category 2, 400 Question"},{"qNumber": 123, "name": "Category 2, 600 Question"},
    {"qNumber": 124, "name": "Category 2, 800 Question"}, {"qNumber": 125, "name": "Category 2, 1000 Question"},

    {"qNumber": 131, "name": "Category 3, 200 Question"}, {"qNumber": 132, "name": "Category 3, 400 Question"},{"qNumber": 133, "name": "Category 3, 600 Question"},
    {"qNumber": 134, "name": "Category 3, 800 Question"}, {"qNumber": 135, "name": "Category 3, 1000 Question"},

    {"qNumber": 141, "name": "Category 4, 200 Question"}, {"qNumber": 142, "name": "Category 4, 400 Question"},{"qNumber": 143, "name": "Category 4, 600 Question"},
    {"qNumber": 144, "name": "Category 4, 800 Question"}, {"qNumber": 145, "name": "Category 4, 1000 Question"},

    {"qNumber": 151, "name": "Category 5, 200 Question"}, {"qNumber": 152, "name": "Category 5, 400 Question"},{"qNumber": 153, "name": "Category 5, 600 Question"},
    {"qNumber": 154, "name": "Category 5, 800 Question"}, {"qNumber": 155, "name": "Category 5, 1000 Question"},

    {"qNumber": 161, "name": "Category 6, 200 Question"}, {"qNumber": 162, "name": "Category 6, 400 Question"},{"qNumber": 163, "name": "Category 6, 600 Question"},
    {"qNumber": 164, "name": "Category 6, 800 Question"}, {"qNumber": 165, "name": "Category 6, 1000 Question"},
    ];

    return(
        <div>
            <h1>{gameTitle}</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <h2>Round 1</h2>
                    
                <div>
                    <h2>Round 1 Daily Double</h2>
                    <select 
                    style={{width: "200px"}}
                    value={R1DD}
                    onChange={(e) => setR1DD(e.target.value)}>
                        {r1DDOptions.map((option)=>{
                            return(
                            <option
                            key={option.qNumber}
                            value={option.qNumber}>
                                {option.name}
                            </option>
                            )
                        })}

                    </select>
                </div>
                <br></br>
                <div>
                    <Box sx={{width: '75%', typography: 'body1'}}>
                        <TabContext value={tabR1Value}>
                            <Box sx={{backgroundColor:"#ccdceb", borderBottom: 1, borderColor: 'black', width: '100%'}}>
                                <TabList onChange={handleTabR1ValueChange}>
                                    <Tab label="Category 1" value="0" />
                                    <Tab label="Category 2" value="1"/>
                                    <Tab  label="Category 3" value="2"/>
                                    <Tab label="Category 4" value="3"/>
                                    <Tab label="Category 5" value="4"/>
                                    <Tab label="Category 6" value="5"/>
                                </TabList>
                            </Box>
                                <TabPanel value="0" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 1 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C1}
                                                    onChange={(e) => setR1C1(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C1QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea
                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="1" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 2 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C2}
                                                    onChange={(e) => setR1C2(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C2QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea
                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="2" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 3 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C3}
                                                    onChange={(e) => setR1C3(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C3QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea
                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="3" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 4 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C4}
                                                    onChange={(e) => setR1C4(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C4QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea
                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="4" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 5 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C5}
                                                    onChange={(e) => setR1C5(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C5QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea
                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="5" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <Grid 
                                    container 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                        <Grid item xs={12}>
                                            <Box>
                                                <label>Category 6 Title: </label>
                                                <input
                                                    type="text"
                                                    value={R1C6}
                                                    onChange={(e) => setR1C6(e.target.value)}
                                                >
                                                </input>
                                            </Box>
                                        </Grid>
                                        {r1C6QsAndAs.map(
                                            (qAndA) => {
                                                return(
                                                        <Grid item xs={6} key={qAndA.key}>
                                                            <Box>
                                                                <label>
                                                                    {qAndA.type}
                                                                </label>
                                                                <textarea

                                                                value={qAndA.value}
                                                                onChange={(e) => qAndA.setState(e.target.value)}>
                                                                </textarea>
                                                            </Box>
                                                        </Grid>
                                                )
                                        })}
                                    </Grid>
                                </TabPanel>
                        </TabContext>
                    </Box>
                </div>         
            </div>
                <br></br>
                <div>
                    <button>
                        Save and Continue
                    </button>
                </div>
            </form>               
        </div>
    );


}

export default NewGameRound1;