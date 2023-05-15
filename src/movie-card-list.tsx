//libraries
import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//local imports
import MovieCard from './movie-card';

//Interfaces
interface URLParams {
    id: string;
};

interface MovieCardListProps {
    link: number;
};

function MovieCardList() {

    let match = useParams<URLParams>();
    let getMoviesByUserApuUrl: string = `http://localhost:5092/getmoviesbyuser/${match.id}`;

    const [data, setData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`${getMoviesByUserApuUrl}`);
                setData({ results: result.data });
                console.log(result.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        };
        fetchData();
    }, []);

    return (
        <>
            {data.results.map((props: MovieCardListProps) => (
                <MovieCard link={props.link} />
            ))}
        </>
    );
};

export default MovieCardList;