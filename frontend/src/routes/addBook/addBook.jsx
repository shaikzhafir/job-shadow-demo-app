import axios from "axios"
import "./addBook.css"
import { useReducer } from "react"
import postBook from "../../customHooks/postBook"
import "./addBook.css"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }



export default function AddBook(){
    const [formData, setFormData] = useReducer(formReducer,{})
    
    let navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:4000/books",formData)
             .then((res) => console.log(res))
             .catch(err => console.log(err))
        
        console.log(formData);
        alert("Submitted")
    }

    const handleChange = event => {
        setFormData({
            name : event.target.name,
            value : event.target.value
        })
    }


    return (
        <>
        <div className="topBar">
            <div></div>
            <h1>Add Book</h1>
            <Button onClick={() => {navigate("/")}}>Book List </Button>
        </div>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Book Title</label><br></br>
                <input type="text" name="title" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="author">Author</label><br></br>
                <input type="text" name="author" onChange={handleChange} required  />
            </div>
            <div>
                <label htmlFor="isbn">ISBN</label><br></br>
                <input type="text" name="isbn" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="title">Genre</label><br></br>
                <input type="text" name="genre" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="title">Image url</label><br></br>
                <input type="text" name="imageUrl" onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
        
        </div>
        </>
    )
}


