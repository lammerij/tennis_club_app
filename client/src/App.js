// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReviewList from "./pages/ReviewList";
import NewReview from "./pages/NewReview";
import Home from "./pages/Home";
import ClubList from "./pages/ClubList";
import NewClub from "./pages/NewClub";

function App() {
  const [user, setUser] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [reviews, setReviews] = useState([]);
  console.log(user)

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((review) => setReviews(review));
  }, []);

  useEffect(() => {
    fetch("/tennis_clubs")
      .then((response) => response.json())
      .then((club) => setClubs(club));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function updatedReviewsList(updatedReview) {
    const updateAll = reviews.map((rev) =>
      rev.id == updatedReview.id ? updatedReview : rev
    );
    setReviews(updateAll);
  }

  const deleteReviewList = (deletedReview) => {
    const deletedReviews = reviews.filter(
      (review) => review.id !== deletedReview
    );
    setReviews(deletedReviews);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewReview
              user={user}
              clubs={clubs}
              reviews={reviews}
              setReviews={setReviews}
            />
          </Route>
          <Route path="/newtennis_club">
            <NewClub clubs={clubs} setClubs={setClubs} />
          </Route>
          <Route path="/reviews">
            <ReviewList
              reviews={reviews}
              deleteReviewList={deleteReviewList}
              user={user}
              setReviews={setReviews}
              updatedReviewsList={updatedReviewsList}
              clubs={clubs}
            />
          </Route>
          <Route path="/tennis_clubs">
            <ClubList clubs={clubs} setClubs={setClubs} />
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
