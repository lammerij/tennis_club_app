import React from 'react'
import { useEffect, useState } from "react";

 function TennisClubList() {
  const [clubs, setClubs] = useState([])

  useEffect(()=>{
    fetch("/tennis_clubs")
    .then((response) => response.json())
    .then(setClubs);
  }, []);

  return (
  <Wrapper>

  </Wrapper>>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Club = styled.article`
  margin-bottom: 24px;
`;
export default TennisClubList
