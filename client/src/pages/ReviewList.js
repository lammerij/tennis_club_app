import styled from "styled-components";
import ReviewCard from "../components/ReviewCard";
import {Button} from "../styles"

function ReviewList({
  user,
  reviews,
  deleteReviewList,
  setReviews,
  updatedReviewsList,
  clubs
}) {
  const reviewsCard = reviews.map((aReview) => {
    return (
      <ReviewCard
        aReview={aReview}
        key={aReview.id}
        deleteReviewList={deleteReviewList}
        user={user}
        setReviews={setReviews}
        reviews={reviews}
        updatedReviewsList={updatedReviewsList}
        clubs={clubs}
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
