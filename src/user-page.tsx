
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