//libraries
import React from "react";
import styled from "styled-components";
import axios from "axios";

//interfaces
interface MovieCardProps {
    link: number;
    rating: number;
};

interface MovieCardData {
    results: any;
};

//Styled components
const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    width: 50rem;
    height: 20rem;
    border-radius: 16px;
    box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 0.75);

    transition: box-shadow 0.15s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 1);
        transform: scale(1.05);
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 66%;
    height: 100%;

    h1, p {
        margin-top: .5rem;
        margin-right: 1rem;
        margin-left: 1rem;
        text-align: center;
    }
`;

const MoviePoster = styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

function MovieCard(props: MovieCardProps) {
    //props will give us the movie link to call the TMDB API
    //https://api.themoviedb.org/3/movie/{id}

    let movieId: number = props.link;
    let getMovieInfoApiUrl: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b5ced27703b7b4556f41ed1063214729&language=en-US&append_to_response=images&include_image_language=en,null`;

    const [data, setData] = React.useState<MovieCardData>({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`${getMovieInfoApiUrl}`);
                setData({ results: result.data });
                //console.log(result.data)
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
                <h2>User Rating {props.rating}</h2>
            </TextContainer>
        </MovieCardContainer>
    );
}

export default MovieCard;