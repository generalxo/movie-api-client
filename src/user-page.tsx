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
import MovieForm from "./movie-form";
import MovieCardList from "./movie-card-list";
import GenreForm from "./genre-form";

const UserPageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 95%;
   margin-bottom: 3rem;
`;

const MovieCardContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, auto);
   grid-gap: 2rem;
   width: 95%;
`;

const FormContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 5rem;
`;

function UserPage() {
   return (
      <UserPageContainer>

         <FormContainer>
            <UserCard />
            <GenreForm />
            <MovieForm />
         </FormContainer>
         <MovieCardContainer>
            <MovieCardList />
         </MovieCardContainer>
      </UserPageContainer>
   );
}

export default UserPage;