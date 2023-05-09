//Libraries
import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Local imports
import HomePageList from './HomePageList';
import UserCard from './UserCard';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 2rem;
    padding: 1rem;
    margin-top: 2rem;
`;

function App() {

  return (
    <>
      <Router>
        <MainContainer>
          <Container>
            <HomePageList />
          </Container>
        </MainContainer>
        <Switch>
          <Route path="/user/:id">
            <UserCard />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
