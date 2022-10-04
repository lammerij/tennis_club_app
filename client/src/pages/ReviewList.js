// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ReviewList({reviews}) {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("/reviews")
  //     .then((response) => response.json())
  //     .then(setReviews);
  // }, []);

  return (
    <Wrapper>
      {reviews.map((review) => (
        <Review key={review.id}>
          <Box>
            <h1>TENNIS CLUB:</h1>
            <h3>{review.tennis_club.name} </h3> Location:{" "}
            {review.tennis_club.location} Court Type:{" "}
            {review.tennis_club.court_type}
            <h2>"{review.review}"</h2>
            <Button as={Link} to="/new">
              Create a New Review
            </Button>
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
