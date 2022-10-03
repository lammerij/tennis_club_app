import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ReviewList({clubs}) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then(setReviews);
  }, []);

  return (
    <Wrapper>
      {reviews.map((review) => (
        <Review key={review.id}>
          <Box>
            <h1>TENNIS CLUB:</h1>
            <h3>{review.tennis_club.name} </h3> Location:{" "}
            {review.tennis_club.location} Court Type:{" "}
            {review.tennis_club.court_type}
            <h2>{review.review}</h2>
            <p>
              &nbsp;·&nbsp;
              <cite>
                By {review.player.name} | City: {review.player.city} | ATP
                Rating: {review.player.atp_rating}
              </cite>
            </p>
          </Box>
        </Review>
      ))}
      <>
        <h2> You Have No Reviews! </h2>
        <Button as={Link} to="/new">
          Make a New Review
        </Button>
      </>
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

export default ReviewList;
