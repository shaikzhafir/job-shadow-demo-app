import { useParams } from "react-router-dom"

// fetching data from backend here 
import useFetch from "../customHooks/useFetch"


// UI components from material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



export default function Book() {
    let params = useParams();
    const { data, loading, error } = useFetch(`http://localhost:4000/books/${params.bookId}`)
    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>Error fetching book</div>}
            {data &&
                <>
                    <h2 style={{ textAlign: "center" }}>Book Details</h2>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Card key={data._id} sx={{ maxWidth: 300, margin: "0.5em" }}>
                            <CardMedia
                                component="img"
                                image={data.imageUrl}
                                alt="image of book"
                                width="300"
                                height="500"
                            />
                            <CardContent>
                                <h4>{data.title}</h4>
                                <h5>{data.author}</h5>
                                <h5>{data.genre}</h5>
                            </CardContent>
                        </Card>
                    </div>

                </>
            }
        </>
    );
}