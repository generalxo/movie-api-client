import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

interface URLParams {
    id: string;
};

const MovieFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    text-align: center;

    input, button {
        color: black;
        font-size: 1rem;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;

function MovieForm() {
    let match = useParams<URLParams>();
    //console.log(match.id)
    const [link, setLink] = React.useState(0);
    const [rating, setRating] = React.useState(0);

    function handleLinkChange(event: any) {
        setLink(event.target.value);
        //console.log(link)
    }
    function handleRatingChange(event: any) {
        setRating(event.target.value);
        //console.log(rating)
    }
    function handleSubmit(event: any) {
        event.preventDefault();
        //console.log('link: ' + link + ' rating: ' + rating)
        if (link === 0 || rating === 0) {
            alert('Please fill out all fields')
            return;
        }
        else if (rating < 0 || rating > 10) {
            alert('Please enter a rating between 1 and 10')
            return;
        }


        axios({
            method: 'post',
            url: 'http://localhost:5092/postmovie',
            data: {
                link: link,
                rating: rating,
                userId: parseInt(match.id)
            }
        })
    }

    return (
        <>
            <MovieFormContainer>
                <form onSubmit={handleSubmit}>
                    <h1>Movie Form</h1>
                    <h3>TMDB Movie Link</h3>
                    <input type="number" value={link} onChange={handleLinkChange} />
                    <h3>Rating 1-10</h3>
                    <input type="number" value={rating} onChange={handleRatingChange} />
                    <h3>Add Movie</h3>
                    <button type="submit">Send</button>
                </form>
            </MovieFormContainer>
        </>
    )
}

export default MovieForm