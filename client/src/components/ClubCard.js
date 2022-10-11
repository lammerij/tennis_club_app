import React from "react";
import styled from "styled-components";
import { Box, Button } from "../styles";
import {Link} from 'react-router-dom'

function ClubCard({ club, setClubs }) {
  const { id, name, court_type, location } = club;
  return (
    <Wrapper>
      <Club>
        <Box>
          <h1>Tennis Club</h1>
          <h3>Name: {name}</h3>
          <h4>Court Type: {court_type}</h4>
          <h5>Location: {location}</h5>
        </Box>
      </Club>
      <WrapperChild>
        <Button as={Link} to="/newclub">
          Add A Club
        </Button>
      </WrapperChild>
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

const WrapperChild = styled.div`
  flex: 1;
`;

export default ClubCard;
