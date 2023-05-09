//Libraries
import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Local imports
import HomePage from "./HomePage";

{/* <Link to={`/user/${user.Id}`} key={user.Id}> */ }


function HomePageList() {
    const [data, setData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('http://localhost:5092/user');
                console.log(result.data);
                setData({ results: result.data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data.results.map((user: any) => (
                <Link to={`/user/${user.Id}`} key={user.Id}>
                    < HomePage key={user.Id} firstName={user.firstName} lastName={user.lastName} />
                </Link>
            ))}
        </>
    );
}

export default HomePageList;