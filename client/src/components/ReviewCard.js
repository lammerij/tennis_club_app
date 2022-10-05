import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ReviewCard({ aReview, user, deleteReviewList }) {
  const { id, player, tennis_club, review } = aReview;

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
  return (
    <Wrapper>
      <Review>
        <Box>
          <h1>TENNIS CLUB:</h1>
          <h3>{tennis_club.name} </h3> Location: {tennis_club.location} Court
          Type: {tennis_club.court_type}
          <h2>"{review}"</h2>
          <Button as={Link} to="/new">
            Create a New Review
          </Button>
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Review = styled.article`
  margin-bottom: 24px;
`;
export default ReviewCard;
