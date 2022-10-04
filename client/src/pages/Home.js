import React from "react";
import styled from "styled-components";

function Home({ user }) {
  const { name } = user;

  return (
    <Wrapper>
      <Logo>Welcome {name}</Logo>
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
  color: black;
  margin: 0;
  line-height: 1;
  display: flex;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Home;
