import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";

function NewClub({ clubs, setClubs }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [courtType, setCourtType] = useState("");
  const history = useHistory();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleCourtTypeChange(event) {
    setCourtType(event.target.value);
  }

  return (
    <Wrapper>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;
export default NewClub;
