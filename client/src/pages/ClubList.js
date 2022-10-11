import React from "react";
import ClubCard from "../components/ClubCard";
import styled from "styled-components";

function ClubList({ clubs, setClubs }) {
  const clubCard = clubs.map((club) => {
    return <ClubCard key={club.id} club={club} setClubs={setClubs} />;
  });

  return <Wrapper>{clubCard}</Wrapper>;
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default ClubList;
