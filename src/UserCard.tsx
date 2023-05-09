import styled from "styled-components";

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20rem ;
    height: 20rem;
    background: #2e2e2e;
    margin-top: 2rem;
    border-radius: 20px;
    box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 0.75);

    &:hover {
        box-shadow: 0px 0px 13px 0px rgba(192, 217, 255, 1);
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
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: flex-start;
    
    h3 {
        margin-bottom: .25rem;
        margin-top: .125rem;
    }

    p { font-size: 1rem; 
        margin-bottom: .125rem;
    }
`;

function UserCard(props: any) {
    return (
        <>
            <UserCardContainer>
                <UserNameBanner>
                    <h2>Jon Doe{props.fistName} {props.LastName}</h2>
                </UserNameBanner>
                <LikedGenresContainer>
                    <h3>Liked Genres</h3>
                    <p>
                        1. Create Function to List all liked genres of a user. 2. If string length is greater than X, truncate and add "..." to the end of the string & add modal to show full string.
                    </p>
                </LikedGenresContainer>
                <LikedGenresContainer>
                    <h3>Liked Movies</h3>
                    <p>
                        1. Create Function that calls our API to get liked movies that in turn calls the TMDB API to get the movie data. Do step 2 for this as well.
                    </p>
                </LikedGenresContainer>
            </UserCardContainer>
        </>
    );

};

export default UserCard;