import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label, Error } from "../styles";

function NewClub({ clubs, setClubs }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [courtType, setCourtType] = useState("");
  const [errors, setErrors] = useState([]);
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

  function handleNewClubSubmit(event) {
    event.preventDefault();

    const newClub = {
      name: name,
      location: location,
      court_type: courtType,
    };
    // debugger
    fetch("/tennis_clubs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClub),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then(
            (newClub) => setClubs([...clubs, newClub]),
            setName(""),
            setLocation(""),
            setCourtType(""),
            history.push("/reviews")
          );
      } else {
        response.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <Wrapper>
      <Label>Add A Club!</Label>
      <WrapperChild>
        <form onSubmit={handleNewClubSubmit}>
          <FormField>
            Name:
            <Input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
            Location:
            <Input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
            Court Type:
            <Input
              type="text"
              id="courtType"
              value={courtType}
              onChange={handleCourtTypeChange}
            />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
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
