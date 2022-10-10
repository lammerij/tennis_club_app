import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";

function NewReview({ user, clubs, reviews, setReviews }) {
  // console.log(clubs);
  const [review, setReview] = useState("");
  const [selectedClub, setSelectedClub] = useState({});
  const history = useHistory();
  //   console.log(selectedClub);
  function handleReviewSubmit(event) {
    setReview(event.target.value);
  }
  // const currentUser = user;
  // // console.log(currentUser);

  function handleChange(event) {
    const findClub = clubs.find((club) => club.id == event.target.value);
    setSelectedClub(findClub);
  }
  const listOfClubs = clubs.map((club) => {
    return (
      <option value={club.id} key={club.id}>
        {club.name}
      </option>
    );
  });

  function handleSubmit(event) {
    event.preventDefault();
    if ([review].some((value) => value.trim() === "")) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }

    const newReview = {
      review: review,
      tennis_club_id: selectedClub.id,
    };
    // debugger
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews([...reviews, newReview]);
        setReview("");
      });
    history.push("/reviews");
  }
  return (
    <Wrapper>
      <WrapperChild>
        <Label htmlFor="review">Leave a Review</Label>
        <p>Select Club:</p>
        <form onSubmit={handleSubmit}>
          <FormField>
            <select value={selectedClub.id} onChange={handleChange}>
              {listOfClubs}
            </select>
            <Input
              type="text"
              id="review"
              value={review}
              onChange={handleReviewSubmit}
            />
            <Button color="primary" type="submit">
              Submit
            </Button>
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

// const Club = styled.article`
//   margin-bottom: 24px;
// `;

export default NewReview;
