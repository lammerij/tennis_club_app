import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Tennis Club Reviewer</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/tennis_clubs">
          Clubs
        </Button>
        <Button as={Link} to="/newtennis_club">
          New Club
        </Button>
        <Button as={Link} to="/reviews">
          Reviews
        </Button>
        <Button as={Link} to="/newreview">
          New Review
        </Button>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: green;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: relative;
  left: 8px;
`;

export default NavBar;
