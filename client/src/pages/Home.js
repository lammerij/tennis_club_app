import React from "react";
import styled from "styled-components";

function Home({user}) {



  return (
    <Wrapper>
      <h1>Welcome {user.name}</h1>
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

export default Home;
