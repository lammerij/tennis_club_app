// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReviewList from "./pages/ReviewList";
import NewReview from "./pages/NewReview";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((data)=> setReviews(data));
  }, []);

  // const listOfClubs = clubs.map((club) => {
  //   return club
  // });

  useEffect(() => {
    fetch("/tennis_clubs").then((response) => {
      if (response.ok) {
        response.json().then((data) => setClubs(data));
      }
    });
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewReview user={user} clubs={clubs} reviews={reviews} />
          </Route>
          <Route path="/reviews">
            <ReviewList reviews={reviews} />
          </Route>
          <Route path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
