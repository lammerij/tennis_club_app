import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function TennisClub({ clubs }) {
  return (
    <Wrapper>
      {clubs.map((club) => (
        <Club key={club.id}>
          <Box>
            <h3>{club.name} </h3> Location: {club.location} Court Type:{" "}
            {club.court_type}
          </Box>
        </Club>
      ))}
      <>
        <Button as={Link} to="/new">
          Add a Club Here!
        </Button>
      </>
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

export default TennisClub;
