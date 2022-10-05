// import { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewCard from "../components/ReviewCard";

function ReviewList({ user, reviews, deleteReviewList }) {
  // console.log(reviews)

  const reviewsCard = reviews.map((aReview) => {
    return (
      <ReviewCard
        aReview={aReview}
        key={aReview.id}
        deleteReviewList={deleteReviewList}
        user={user}
      />
    );
  });

  return <Wrapper>{reviewsCard}</Wrapper>;
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

// const ReviewCardStyle = styled.article`
//   margin-bottom: 24px;
// `;

export default ReviewList;
