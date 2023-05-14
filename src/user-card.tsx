//libraries
import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

//local imports
import UserLikedGenre from "./user-liked-genre";

//Styled components
const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 25rem ;
    height: auto;
    background: #2e2e2e;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 0.75);

    transition: box-shadow 0.15s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 1);
        transform: scale(1.05);
    }
`;

const UserNameBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h2{
        font-size: 1.7rem;
    }
`;

const LikedGenresContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: .5rem;
    width: 95%;
    align-items: center;
    justify-content: center;

    h3 {
        margin-bottom: .25rem;
        margin-top: .125rem;
    }
    h4 {
        font-size: 1rem; 
        margin-bottom: .125rem;
        text-align: center;
    }
`;

interface URLParams {
    id: string;
};

interface UserNameBannerProps {
    firstName: string;
    lastName: string;
};

function UserCard() {

    let match = useParams<URLParams>();
    let getUserInfoApiUrl: string = `http://localhost:5092/user/${match.id}`
    const [data, setData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`${getUserInfoApiUrl}`);
                setData({ results: result.data });
                //console.log(result.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        };
        fetchData();
    }, []);

    return (
        <>
            <UserCardContainer>
                <UserNameBanner>
                    {data.results.map((props: UserNameBannerProps, index: number) => (
                        <h2 key={index}>{props.firstName} {props.lastName}</h2>
                    ))}
                </UserNameBanner>

                <h3>Liked Genres</h3>
                <LikedGenresContainer>
                    <UserLikedGenre />
                </LikedGenresContainer>
            </UserCardContainer>
        </>
    );

};

export default UserCard;