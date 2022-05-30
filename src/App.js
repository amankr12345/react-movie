import axios from "axios";
import React,{useState} from "react"
import Movie from "./movie";

function App() {
     const  [text,setText]=useState("sesrch movie")
     const [movie,setMovie]=useState([])
    const handleChange=(e)=>{
         setText(e.target.value)
     }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.get(`http://www.omdbapi.com/?s=${text}&apikey=d239c4bc`)
        .then(res=>setMovie(res.data.Search))    
        console.log(movie)    
    }
    return (
        <>
             <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="google.com">Movie App</a>
                    
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" value={text} onChange={handleChange}/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </nav> 
            <Movie movie={movie}/>
            
        </>
    )


}

export default App
