import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <img
        src="/images/pexels-bogdan-glisik-1405355.jpg"
        width="750"
        height="800"
      ></img>
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

const WrapperChild = styled.div`
  align-items: center;
`;

export default Home;
