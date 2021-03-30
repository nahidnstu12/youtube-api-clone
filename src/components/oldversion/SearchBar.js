import React,{useState} from 'react'
import  {Paper,TextField} from "@material-ui/core";

function SearchBar({submit}) {

    const [searchTerm,setSearch] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        submit(searchTerm);
    }
    
    return (
        <Paper elevation={6} style={{padding:"25px",width:"55%"}}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={e=>setSearch(e.target.value)}/>
            </form>
        </Paper>
    )
}

export default SearchBar
