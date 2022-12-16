import React from "react";
import styled from "styled-components";

function Home({ user }) {
  return (
    <Wrapper>
      <h1>Welcome {user.name}</h1>
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
