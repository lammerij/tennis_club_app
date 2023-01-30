import React from "react";
import styled from "styled-components";
import { Box } from "../styles";

function ClubCard({ club, setClubs }) {
  const { id, name, court_type, location } = club;

  return (
    <Wrapper>
      <Club>
        <Box>
          <h3>Name: {name}</h3>
          <h4>Court Type: {court_type}</h4>
          <h5>Location: {location}</h5>
        </Box>
      </Club>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Club = styled.article`
  margin-bottom: 24px;
`;

export default ClubCard;
