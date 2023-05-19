//Libraries
import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

//Local imports

//Styled components
const GenreFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    text-align: center;

    select, input, button, option {
        color: black;
        font-size: 1rem;
    }
`;

//Interfaces
interface URLParams {
    id: string;
};
interface GenreFormProps {
    id: number;
    tmdbId: number;
    title: string;
    description: string;
};

/* function handleChange(event: any) {
    console.log(event.target.value)
} */


function GenreForm() {
    let match = useParams<URLParams>();

    let foundMatch: boolean = false;
    let genreList: GenreFormProps[] = [];

    //Set the state for the genres and the genres that the user has liked
    const [genre, setGenre] = React.useState({ results: [] });
    const [likedGenre, setLikedGenre] = React.useState({ results: [] });
    const [selectedGenre, setSelectedGenre] = React.useState('');

    //Get the genres from the database
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('http://localhost:5092/genre')
                const result2 = await axios(`http://localhost:5092/getlikedgenre/${match.id}`)
                setGenre({ results: result.data });
                setLikedGenre({ results: result2.data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    //Get the genres that the user has not liked yet
    genre.results.forEach((genre: GenreFormProps) => {
        likedGenre.results.forEach((likedGenre: GenreFormProps) => {
            if (genre.tmdbId === likedGenre.tmdbId) {
                foundMatch = true;
            }
        }) //Second forEach loop ends here

        //Check if a user has already liked a genre and if they have, don't add it to the list for the dropdown menu
        if (foundMatch === false) {
            genreList.push(genre)
        }
        else if (foundMatch === true) {
            foundMatch = false;
        }
    });
    //console.log(genreList)
    const handleChange = (e: any) => {
        setSelectedGenre(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(selectedGenre)
        axios.post(`http://localhost:5092/postlikedgenre`, {
            userId: Number(match.id),
            genreId: Number(selectedGenre)
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    }

    return (
        <>
            <GenreFormContainer>
                <form onSubmit={handleSubmit}>
                    <h1>Genre Form</h1>
                    <h2>Add Liked Genre</h2>
                    <select value={selectedGenre} onChange={handleChange}>
                        {genreList.map((props: GenreFormProps, index: number) => (
                            <option key={index} value={props.id}>{props.title}</option>
                        ))}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </GenreFormContainer>
        </>
    );

};

export default GenreForm;