import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, FormField, Input } from "../styles";
import EditReview from "../pages/EditReview";
import { useState } from "react";

function ReviewCard({ aReview, user, deleteReviewList, reviews, setReviews, editReview }) {
  const { id, player, tennis_club, review } = aReview;
  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState();

  const viewTemplate = (
    <Wrapper>
      <Review>
        <Box>
          <h1>TENNIS CLUB:</h1>
          <h3>{tennis_club.name} </h3> Location: {tennis_club.location} Court
          Type: {tennis_club.court_type}
          <h2>"{review}"</h2>
          <Button onClick={() => setIsEditing(true)}>Edit Review</Button>
          <Button onClick={handleReviewDelete}>Delete Review</Button>
          <p>
            &nbsp;·&nbsp;
            <cite>
              By {player.name} | City: {player.city} | ATP Rating:{" "}
              {player.atp_rating}
            </cite>
          </p>
        </Box>
      </Review>
      <></>
      <WrapperChild>
        <Button as={Link} to="/new">
          Create a New Review
        </Button>
      </WrapperChild>
    </Wrapper>
  );

  const editTemplate = (
    <Wrapper>
      <Review>
        <Box>
          <h1>TENNIS CLUB:</h1>
          <h3>{tennis_club.name} </h3> Location: {tennis_club.location} Court
          Type: {tennis_club.court_type}
          <h2>"{review}"</h2>
          <form onSubmit={handleEditSubmit}>
          <FormField>
          <Button type="submit">Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          <Input
            type="text"
            id={review.id}
            value={editedReview}
            onChange={handleEditChange}
          />
          </FormField>
          </form>
          <p>
            &nbsp;·&nbsp;
            <cite>
              By {player.name} | City: {player.city} | ATP Rating:{" "}
              {player.atp_rating}
            </cite>
          </p>
        </Box>
      </Review>
      <></>
      <WrapperChild>
        <Button as={Link} to="/new">
          Create a New Review
        </Button>
      </WrapperChild>
    </Wrapper>
  );

  // function handleEditClick() {
  //   // debugger;
  //   const reviewForEdit = reviews.find((rev) => rev.id === id);
  //   // console.log(reviewForEdit)
  // }

  // function handleEditReview(event) {
  //   event.preventDefault();
  //   const updatedReview = { review: review };
  //   fetch(`/reviews/${aReview.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       body: JSON.stringify(updatedReview),
  //     }
  //       .then((response) => response.json())
  //       .then((data) => console.log(data)),
  //   });
  // }

  function handleEditChange(event) {
    setEditedReview(event.target.value);
  }

  function handleEditSubmit(event) {
    event.preventDefault();
    const updatedReview = { review: review };
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(updatedReview),
      }
        .then((response) => response.json())
        .then((data) => console.log(data)),
    });
  }

  function handleReviewDelete() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      deleteReviewList(id);
    });
  }
  return <li>{isEditing ? editTemplate : viewTemplate}</li>;
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Review = styled.article`
  margin-bottom: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;
export default ReviewCard;
