import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NewGameRound2 = () =>{
    //Round 2
    //Round 2 Category states
    const [R2C1, setR2C1] = useState("");
    const [R2C2, setR2C2] = useState("");
    const [R2C3, setR2C3] = useState("");
    const [R2C4, setR2C4] = useState("");
    const [R2C5, setR2C5] = useState("");
    const [R2C6, setR2C6] = useState("");

    //Round 2 Category 1 Questions and Answers
    const [R2C1Q1, setR2C1Q1] = useState("")
    const [R2C1A1, setR2C1A1] = useState("")
    const [R2C1Q2, setR2C1Q2] = useState("")
    const [R2C1A2, setR2C1A2] = useState("")
    const [R2C1Q3, setR2C1Q3] = useState("")
    const [R2C1A3, setR2C1A3] = useState("")
    const [R2C1Q4, setR2C1Q4] = useState("")
    const [R2C1A4, setR2C1A4] = useState("")
    const [R2C1Q5, setR2C1Q5] = useState("")
    const [R2C1A5, setR2C1A5] = useState("")

    //Round 2 Category 2 Questions and Answers
    const [R2C2Q1, setR2C2Q1] = useState("")
    const [R2C2A1, setR2C2A1] = useState("")
    const [R2C2Q2, setR2C2Q2] = useState("")
    const [R2C2A2, setR2C2A2] = useState("")
    const [R2C2Q3, setR2C2Q3] = useState("")
    const [R2C2A3, setR2C2A3] = useState("")
    const [R2C2Q4, setR2C2Q4] = useState("")
    const [R2C2A4, setR2C2A4] = useState("")
    const [R2C2Q5, setR2C2Q5] = useState("")
    const [R2C2A5, setR2C2A5] = useState("")

    //Round 2 Category 3 Questions and Answers
    const [R2C3Q1, setR2C3Q1] = useState("")
    const [R2C3A1, setR2C3A1] = useState("")
    const [R2C3Q2, setR2C3Q2] = useState("")
    const [R2C3A2, setR2C3A2] = useState("")
    const [R2C3Q3, setR2C3Q3] = useState("")
    const [R2C3A3, setR2C3A3] = useState("")
    const [R2C3Q4, setR2C3Q4] = useState("")
    const [R2C3A4, setR2C3A4] = useState("")
    const [R2C3Q5, setR2C3Q5] = useState("")
    const [R2C3A5, setR2C3A5] = useState("")


    //Round 2 Category 4 Questions and Answers
    const [R2C4Q1, setR2C4Q1] = useState("")
    const [R2C4A1, setR2C4A1] = useState("")
    const [R2C4Q2, setR2C4Q2] = useState("")
    const [R2C4A2, setR2C4A2] = useState("")
    const [R2C4Q3, setR2C4Q3] = useState("")
    const [R2C4A3, setR2C4A3] = useState("")
    const [R2C4Q4, setR2C4Q4] = useState("")
    const [R2C4A4, setR2C4A4] = useState("")
    const [R2C4Q5, setR2C4Q5] = useState("")
    const [R2C4A5, setR2C4A5] = useState("")

    //Round 2 Category 5 Questions and Answers
    const [R2C5Q1, setR2C5Q1] = useState("")
    const [R2C5A1, setR2C5A1] = useState("")
    const [R2C5Q2, setR2C5Q2] = useState("")
    const [R2C5A2, setR2C5A2] = useState("")
    const [R2C5Q3, setR2C5Q3] = useState("")
    const [R2C5A3, setR2C5A3] = useState("")
    const [R2C5Q4, setR2C5Q4] = useState("")
    const [R2C5A4, setR2C5A4] = useState("")
    const [R2C5Q5, setR2C5Q5] = useState("")
    const [R2C5A5, setR2C5A5] = useState("")

    //Round 2 Category 6 Questions and Answers
    const [R2C6Q1, setR2C6Q1] = useState("")
    const [R2C6A1, setR2C6A1] = useState("")
    const [R2C6Q2, setR2C6Q2] = useState("")
    const [R2C6A2, setR2C6A2] = useState("")
    const [R2C6Q3, setR2C6Q3] = useState("")
    const [R2C6A3, setR2C6A3] = useState("")
    const [R2C6Q4, setR2C6Q4] = useState("")
    const [R2C6A4, setR2C6A4] = useState("")
    const [R2C6Q5, setR2C6Q5] = useState("")
    const [R2C6A5, setR2C6A5] = useState("")


    //Daily Double States
    const [R2DD, setR2DD] = useState("211")

    
 

    
    const [tabR2Value, setTabR2Value] = useState('0');
    const handleTabR2ValueChange = (event, newTabValue) =>{
        setTabR2Value(newTabValue);
    }

    
    
    //Round 2
    const r2C1QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C1Q1, "setState": setR2C1Q1},
        {"type": "400 Answer: ", "value": R2C1A1, "setState": setR2C1A1},
        {"type": "800 Question: " , "value": R2C1Q2, "setState": setR2C1Q2},
        {"type": "800 Answer: ", "value":R2C1A2 , "setState": setR2C1A2},
        {"type": "1200 Question: ", "value": R2C1Q3, "setState": setR2C1Q3 },
        {"type": "1200 Answer: ", "value": R2C1A3 , "setState": setR2C1A3},
        {"type": "1600 Question: ", "value": R2C1Q4 , "setState": setR2C1Q4 },
        {"type": "1600 Answer: ", "value": R2C1A4 , "setState": setR2C1A4 },
        {"type": "2000 Question: ", "value": R2C1Q5, "setState": setR2C1Q5},
        {"type": "2000 Answer: ", "value": R2C1A5 , "setState": setR2C1A5 }]
    
    const r2C2QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C2Q1, "setState": setR2C2Q1},
        {"type": "400 Answer: ", "value": R2C2A1, "setState": setR2C2A1},
        {"type": "800 Question: " , "value": R2C2Q2, "setState": setR2C2Q2},
        {"type": "800 Answer: ", "value":R2C2A2 , "setState": setR2C2A2},
        {"type": "1200 Question: ", "value": R2C2Q3, "setState": setR2C2Q3 },
        {"type": "1200 Answer: ", "value": R2C2A3 , "setState": setR2C2A3},
        {"type": "1600 Question: ", "value": R2C2Q4 , "setState": setR2C2Q4 },
        {"type": "1600 Answer: ", "value": R2C2A4 , "setState": setR2C2A4 },
        {"type": "2000 Question: ", "value": R2C2Q5, "setState": setR2C2Q5},
        {"type": "2000 Answer: ", "value": R2C2A5 , "setState": setR2C2A5 }]

    const r2C3QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C3Q1, "setState": setR2C3Q1},
        {"type": "400 Answer: ", "value": R2C3A1, "setState": setR2C3A1},
        {"type": "800 Question: " , "value": R2C3Q2, "setState": setR2C3Q2},
        {"type": "800 Answer: ", "value":R2C3A2 , "setState": setR2C3A2},
        {"type": "1200 Question: ", "value": R2C3Q3, "setState": setR2C3Q3 },
        {"type": "1200 Answer: ", "value": R2C3A3 , "setState": setR2C3A3},
        {"type": "1600 Question: ", "value": R2C3Q4 , "setState": setR2C3Q4 },
        {"type": "1600 Answer: ", "value": R2C3A4 , "setState": setR2C3A4 },
        {"type": "2000 Question: ", "value": R2C3Q5, "setState": setR2C3Q5},
        {"type": "2000 Answer: ", "value": R2C3A5 , "setState": setR2C3A5 }]
    
    const r2C4QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C4Q1, "setState": setR2C4Q1},
        {"type": "400 Answer: ", "value": R2C4A1, "setState": setR2C4A1},
        {"type": "800 Question: " , "value": R2C4Q2, "setState": setR2C4Q2},
        {"type": "800 Answer: ", "value":R2C4A2 , "setState": setR2C4A2},
        {"type": "1200 Question: ", "value": R2C4Q3, "setState": setR2C4Q3 },
        {"type": "1200 Answer: ", "value": R2C4A3 , "setState": setR2C4A3},
        {"type": "1600 Question: ", "value": R2C4Q4 , "setState": setR2C4Q4 },
        {"type": "1600 Answer: ", "value": R2C4A4 , "setState": setR2C4A4 },
        {"type": "2000 Question: ", "value": R2C4Q5, "setState": setR2C4Q5},
        {"type": "2000 Answer: ", "value": R2C4A5 , "setState": setR2C4A5 }]
    
    const r2C5QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C5Q1, "setState": setR2C5Q1},
        {"type": "400 Answer: ", "value": R2C5A1, "setState": setR2C5A1},
        {"type": "800 Question: " , "value": R2C5Q2, "setState": setR2C5Q2},
        {"type": "800 Answer: ", "value":R2C5A2 , "setState": setR2C5A2},
        {"type": "1200 Question: ", "value": R2C5Q3, "setState": setR2C5Q3 },
        {"type": "1200 Answer: ", "value": R2C5A3 , "setState": setR2C5A3},
        {"type": "1600 Question: ", "value": R2C5Q4 , "setState": setR2C5Q4 },
        {"type": "1600 Answer: ", "value": R2C5A4 , "setState": setR2C5A4 },
        {"type": "2000 Question: ", "value": R2C5Q5, "setState": setR2C5Q5},
        {"type": "2000 Answer: ", "value": R2C5A5 , "setState": setR2C5A5 }]
    
    const r2C6QsAndAs = [ 
        {"type": "400 Question: ", "value": R2C6Q1, "setState": setR2C6Q1},
        {"type": "400 Answer: ", "value": R2C6A1, "setState": setR2C6A1},
        {"type": "800 Question: " , "value": R2C6Q2, "setState": setR2C6Q2},
        {"type": "800 Answer: ", "value":R2C6A2 , "setState": setR2C6A2},
        {"type": "1200 Question: ", "value": R2C6Q3, "setState": setR2C6Q3 },
        {"type": "1200 Answer: ", "value": R2C6A3 , "setState": setR2C6A3},
        {"type": "1600 Question: ", "value": R2C6Q4 , "setState": setR2C6Q4 },
        {"type": "1600 Answer: ", "value": R2C6A4 , "setState": setR2C6A4 },
        {"type": "2000 Question: ", "value": R2C6Q5, "setState": setR2C6Q5},
        {"type": "2000 Answer: ", "value": R2C6A5 , "setState": setR2C6A5 }]

    
    //Daily Double
    //Round 2
    const r2DDOptions = 
    [{"qNumber": 211, "name": "Category 1, 400 Question"}, {"qNumber": 212, "name": "Category 1, 800 Question"},{"qNumber": 213, "name": "Category 1, 1200 Question"},
    {"qNumber": 214, "name": "Category , 1600 Question"}, {"qNumber": 215, "name": "Category 1, 2000 Question"},

    {"qNumber": 221, "name": "Category 2, 400 Question"}, {"qNumber": 222, "name": "Category 2, 800 Question"},{"qNumber": 223, "name": "Category 2, 1200 Question"},
    {"qNumber": 224, "name": "Category 2, 1600 Question"}, {"qNumber": 225, "name": "Category 2, 2000 Question"},

    {"qNumber": 231, "name": "Category 3, 400 Question"}, {"qNumber": 232, "name": "Category 3, 800 Question"},{"qNumber": 233, "name": "Category 3, 1200 Question"},
    {"qNumber": 234, "name": "Category 3, 1600 Question"}, {"qNumber": 235, "name": "Category 3, 2000 Question"},

    {"qNumber": 241, "name": "Category 4, 400 Question"}, {"qNumber": 242, "name": "Category 4, 800 Question"},{"qNumber": 243, "name": "Category 4, 1200 Question"},
    {"qNumber": 244, "name": "Category 4, 1600 Question"}, {"qNumber": 245, "name": "Category 4, 2000 Question"},

    {"qNumber": 251, "name": "Category 5, 400 Question"}, {"qNumber": 252, "name": "Category 5, 800 Question"},{"qNumber": 253, "name": "Category 5, 1200 Question"},
    {"qNumber": 254, "name": "Category 5, 1600 Question"}, {"qNumber": 255, "name": "Category 5, 2000 Question"},

    {"qNumber": 261, "name": "Category 6, 400 Question"}, {"qNumber": 262, "name": "Category 6, 800 Question"},{"qNumber": 263, "name": "Category 6, 1200 Question"},
    {"qNumber": 264, "name": "Category 6, 1600 Question"}, {"qNumber": 265, "name": "Category 6, 2000 Question"},
    ];

    return(
        <div>
            <form> 
            <div>
                <h2>Round 2</h2>
                <div>
                    <h2>Round 2 Daily Double</h2>
                    <select 
                    style={{width: "200px"}}
                    value={R2DD}
                    onChange={(e)=>setR2DD(e.target.value)}>
                        {r2DDOptions.map((option)=>{
                            return(
                            <option
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
                            <TabContext value={tabR2Value}>
                                <Box sx={{backgroundColor:"#ccdceb", borderBottom: 1, borderColor: 'black', width: '100%'}}>
                                    <TabList onChange={handleTabR2ValueChange}>
                                        <Tab label="Category 1" value="0" />
                                        <Tab label="Category 2" value="1"/>
                                        <Tab  label="Category 3" value="2"/>
                                        <Tab label="Category 4" value="3"/>
                                        <Tab label="Category 5" value="4"/>
                                        <Tab label="Category 6" value="5"/>
                                    </TabList>
                                </Box>
                                <TabPanel value="0" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <form>
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
                                                            value={R2C1}
                                                            onChange={(e) => setR2C1(e.target.value)}
                                                        >
                                                        </input>
                                                    </Box>
                                                </Grid>
                                                {r2C1QsAndAs.map(
                                                    (qAndA) => {
                                                        return(
                                                                <Grid item xs={6}>
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
                                    
                                                    <Grid item xs={1}>
                                                        <Box>
                                                            <button>
                                                                Save
                                                            </button>
                                                        </Box>
                                                    </Grid>
                                            </Grid>
                                        </form>
                                </TabPanel>
                                <TabPanel value="1" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <form>
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
                                                        value={R2C2}
                                                        onChange={(e) => setR2C2(e.target.value)}
                                                    >
                                                    </input>
                                                </Box>
                                            </Grid>
                                            {r2C2QsAndAs.map(
                                                (qAndA) => {
                                                    return(
                                                            <Grid item xs={6}>
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
                                
                                                <Grid item xs={1}>
                                                    <Box>
                                                        <button>
                                                            Save
                                                        </button>
                                                    </Box>
                                                </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <TabPanel value="2" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                    <form>
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
                                                        value={R2C3}
                                                        onChange={(e) => setR2C3(e.target.value)}
                                                    >
                                                    </input>
                                                </Box>
                                            </Grid>
                                            {r2C3QsAndAs.map(
                                                (qAndA) => {
                                                    return(
                                                            <Grid item xs={6}>
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
                                
                                                <Grid item xs={1}>
                                                    <Box>
                                                        <button>
                                                            Save
                                                        </button>
                                                    </Box>
                                                </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <TabPanel value="3" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                <form>
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
                                                        value={R2C4}
                                                        onChange={(e) => setR2C4(e.target.value)}
                                                    >
                                                    </input>
                                                </Box>
                                            </Grid>
                                            {r2C4QsAndAs.map(
                                                (qAndA) => {
                                                    return(
                                                            <Grid item xs={6}>
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
                                
                                                <Grid item xs={1}>
                                                    <Box>
                                                        <button>
                                                            Save
                                                        </button>
                                                    </Box>
                                                </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <TabPanel value="4" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                <form>
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
                                                        value={R2C5}
                                                        onChange={(e) => setR2C5(e.target.value)}
                                                    >
                                                    </input>
                                                </Box>
                                            </Grid>
                                            {r2C5QsAndAs.map(
                                                (qAndA) => {
                                                    return(
                                                            <Grid item xs={6}>
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
                                
                                                <Grid item xs={1}>
                                                    <Box>
                                                        <button>
                                                            Save
                                                        </button>
                                                    </Box>
                                                </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <TabPanel value="5" sx={{width: "94.7%", backgroundColor: "#8aaed1"}}>
                                <form>
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
                                                        value={R2C6}
                                                        onChange={(e) => setR2C6(e.target.value)}
                                                    >
                                                    </input>
                                                </Box>
                                            </Grid>
                                            {r2C6QsAndAs.map(
                                                (qAndA) => {
                                                    return(
                                                            <Grid item xs={6}>
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
                                            <Grid item xs={1}>
                                                <Box>
                                                    <button>
                                                        Save and Continue
                                                    </button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                    <br></br>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Button
                                    variant="contained"
                                    component={Link} 
                                    to="/newgamefinalquestion"
                                    key="1"
                                    xs={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Save and Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
            </div>
            </form>
        </div>
    );
}

export default NewGameRound2;