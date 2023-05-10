//Libraries
import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Local imports
//import HomePageList from './HomePageList';
import HomeUserCardList from './HomeUserCardList';
import UserCard from './UserCard';
import Navbar from './Navbar';


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
      <MainContainer>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/user/:id">
              <UserCard />
            </Route>
            <Route path="/">
              <Container>
                <HomeUserCardList />
              </Container>
            </Route>
          </Switch>
        </Router>
      </MainContainer >
    </>
  )
}

export default App
