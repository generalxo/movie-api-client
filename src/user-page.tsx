/* 
    Notes: this will be the container page for the user's profile.
     + The user page will have a user card top left with user name and liked genres.
        - The User card will have a plus button to add a new genre.
        - The User card will cut off the liked genres at a certain length and add a modal to show the full list.
        -> call the API with the given user ID fom the URL to get the user's data.
     + The user will have a list of liked movies on the remaining space of the page.
        - The list of movies will have name, description, poster and Rating (if available).
        - The list of movies will have a plus button to add a new movie.
        -> call our API with the given user ID from the URL to get the user's liked movies & Ratings.
        -> call TMDB API with the movie ID's from our API to get the movie data.
*/
//Libraries
import styled from "styled-components";

//Local imports
import UserCard from "./user-card";

const UserPageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`;

function UserPage() {
   return (
      <UserPageContainer>
         <UserCard />
      </UserPageContainer>
   );
}

export default UserPage;