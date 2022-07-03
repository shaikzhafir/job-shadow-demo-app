import "./App.css";

// fetching data from backend here 
import useFetch from "./customHooks/useFetch";

//react Router component here 
import { Link } from "react-router-dom";


// UI components from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function App() {
  const { data, loading, error } = useFetch("http://localhost:4000/books")

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Books App</h1>
      <div className="container">
        {loading && <div>loading...</div>}
        {error && <div>Error fetching books</div>}
        {data && data.map(book => (
          <Card key={book._id} sx={{ minWidth: 300, margin: "0.5em" }}>
            <CardMedia
              component="img"
              image={book.imageUrl}
              width="300"
              height="300"
              alt="image of book"
              objectfit="cover"
            />
            <CardContent>
              <h4>{book.title}</h4>
              <h5>{book.author}</h5>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`/book/${book._id}`}>More Info</Link>
              </Button>
            </CardActions>
          </Card>
        ))}


      </div>
    </>
  );
}

export default App;