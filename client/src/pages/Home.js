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

export default Home;
