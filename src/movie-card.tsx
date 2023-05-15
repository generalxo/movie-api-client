//libraries
import React from "react";
import styled from "styled-components";
import axios from "axios";

//interfaces
interface MovieCardProps {
    link: number;
};

interface MovieCardData {
    results: any;
};

//Styled components
const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    background: red;
    height: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: blue;
    width: 65%;
`;

const MoviePoster = styled.img`
    width: 35%;
    height: auto;
    object-fit: cover;
    object-position: top;
`;

function MovieCard(props: MovieCardProps) {
    //props will give us the movie link to call the TMDB API
    //Create a function that will call the TMDB API and return the movie data
    //How do we handle movie ratings fom our api
    //https://api.themoviedb.org/3/movie/{id}

    let movieId: number = props.link;
    let getMovieInfoApiUrl: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b5ced27703b7b4556f41ed1063214729&language=en-US&append_to_response=images&include_image_language=en,null`;

    const [data, setData] = React.useState<MovieCardData>({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`${getMovieInfoApiUrl}`);
                setData({ results: result.data });
                console.log(result.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        };
        fetchData();
    }, []);

    let posterPath: string = data.results.poster_path;
    let posterUrl: string = `https://image.tmdb.org/t/p/w500/${posterPath}`;

    return (
        <MovieCardContainer>
            <MoviePoster src={posterUrl} />
            <TextContainer>
                <h1>{data.results.original_title}</h1>
                <p>{data.results.overview}</p>
            </TextContainer>
        </MovieCardContainer>
    );
}

export default MovieCard;