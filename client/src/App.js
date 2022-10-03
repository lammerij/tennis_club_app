// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Login from './pages/Login';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ReviewList from './pages/ReviewList';
import NewReview from './pages/NewReview';
import TennisClubList from './pages/TennisClubList';

function App() {
  const [user, setUser] = useState(null)


  // const listOfClubs = clubs.map((club) => {
  //   return club
  // });
  
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser}/>

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewReview user={user} clubs={clubs} />
          </Route>
          <Route path="/">
            <TennisClubList/>
          </Route>
          <Route path="/reviews">
            <ReviewList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
