// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ReviewList from "./pages/ReviewList";
import NewReview from "./pages/NewReview";
import Home from "./pages/Home";
import EditReview from "./pages/EditReview";

function App() {
  const [user, setUser] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews").then((response) => {
      if (response.ok) {
        response.json().then((review) => setReviews(review));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/tennis_clubs").then((response) => {
      if (response.ok) {
        response.json().then((club) => setClubs(club));
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

  function editReview(id, reviewEdit) {
    const editedReviewList = reviews.map((rev) => {
      if (id === rev.id) {
        return { ...rev, review: reviewEdit };
      }
      return rev;
    });
    setReviews(editedReviewList);
  }

  const updatedReviewList = (updatedReview) => {
    const updatedReviews = reviews.map((r) => 
      updatedReview.id === r.id ? updatedReview : r
    );
    setReviews(updatedReviews);
  };

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
          <Route path="/reviews/:id/edit">
            <EditReview reviews={reviews} />
          </Route>
          <Route path="/new">
            <NewReview
              user={user}
              clubs={clubs}
              reviews={reviews}
              setReviews={setReviews}
            />
          </Route>
          <Route path="/reviews">
            <ReviewList
              reviews={reviews}
              deleteReviewList={deleteReviewList}
              user={user}
              setReviews={setReviews}
              editReview={editReview}
              updatedReviewList={updatedReviewList}
            />
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
