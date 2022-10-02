import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ReviewList() {
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
              <h2>{review.review}</h2>
              <p>
                &nbsp;·&nbsp;
                <cite>By {review.user.username}</cite>
              </p>
            </Box>
          </Review>
        ))}
      ) : (
        <>
          <h2>No Reviews Found</h2>
          <Button as={Link} to="/new">
            Make a New Review
          </Button>
        </>
      )
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