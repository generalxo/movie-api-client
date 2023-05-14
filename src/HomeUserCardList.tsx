//Libraries
import * as React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

//Local imports
import HomeUserCard from './HomeUserCard';

interface UserCardListProps {
    firstName: string;
    lastName: string;
    id: number;
};

function HomeUserCardList() { //Topics??

    const [data, setData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('http://localhost:5092/user');
                //console.log(result.data);
                setData({ results: result.data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {data.results.map((props: UserCardListProps, index: number) => (
                <Link to={`/user/${props.id}`} key={index}>
                    <HomeUserCard firstName={props.firstName} lastName={props.lastName} id={props.id} />
                </Link>
            ))}
        </>
    );

};

export default HomeUserCardList;