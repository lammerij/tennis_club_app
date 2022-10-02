// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Login from './pages/Login';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ReviewList from './pages/ReviewList';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={user}/>

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            {/* <NewReview user={user} /> */}
          </Route>
          <Route path="/">
            <ReviewList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
