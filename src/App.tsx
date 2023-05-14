//Libraries
import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Local imports
import HomeUserCardList from './HomeUserCardList';
import Navbar from './Navbar';
import UserPage from './user-page';


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
              <UserPage />
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
