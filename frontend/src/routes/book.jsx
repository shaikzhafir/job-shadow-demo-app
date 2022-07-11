import "./book.css"
import { useParams } from "react-router-dom"

// fetching data from backend here 
import useFetch from "../customHooks/useFetch"


// UI components from material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";





export default function Book() {

    let navigate = useNavigate();
    let params = useParams();
    const [bookData, bookLoading, bookError] = useFetch(`http://localhost:4000/books/${params.bookId}`)
    const [reviewData, reviewLoading, reviewError] = useFetch(`http://localhost:4000/reviews/${params.bookId}`)

    return (
        <>
            {bookLoading && <div>loading...</div>}
            {bookError && <div>Error fetching book</div>}
            {bookData &&
                <>
                    <div style={{ display: "flex", justifyContent: "center", width: "50%", margin: "auto" }}>
                        <Button onClick={() => { navigate("/") }}>Back</Button>
                        <h2 style={{ textAlign: "center" }}>Book Details</h2>
                        <Button />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Card key={bookData._id} sx={{ maxWidth: 300, margin: "0.5em" }}>
                            <CardMedia
                                component="img"
                                image={bookData.imageUrl}
                                alt="image of book"
                                width="300"
                                height="500"
                            />
                            <CardContent>
                                <h4>{bookData.title}</h4>
                                <h5>{bookData.author}</h5>
                                <h5>{bookData.genre}</h5>
                            </CardContent>
                        </Card>
                    </div>

                </>
            }
            <div className="container">
                <h2>Reviews</h2>
                {reviewLoading && <div>Review loading...</div>}
                {reviewError && <div>Error fetching reviews</div>}
                <div className="grid-container-row">
                    {reviewData &&

                        reviewData.map(review => (
                            <>
                                <div key={review._id}>
                                    <h2>{review.reviewText}</h2>
                                    <h3>Rating: {review.rating}</h3>
                                    <h3>Date: {review.date}</h3>
                                </div>

                            </>
                        ))


                    }
                </div>
            </div>
        </>
    );
}