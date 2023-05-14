//libraries
import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Interfaces
interface URLParams {
    id: string;
};

interface UserLikedGenreProps {
    id: number;
    tmdbId: number;
    title: string;
    description: string;
};

function UserLikedGenre() {
    let match = useParams<URLParams>();
    let getLikedGenreInfoApiUrl: string = `http://localhost:5092/getlikedgenre/${match.id}`;

    const [data, setData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`${getLikedGenreInfoApiUrl}`);
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
            {data.results.map((props: UserLikedGenreProps, index: number) => (
                <h4 key={index}>
                    {props.title}
                </h4>
            ))}
        </>
    );
};

export default UserLikedGenre;