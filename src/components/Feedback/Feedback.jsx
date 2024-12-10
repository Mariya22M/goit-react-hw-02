import PropTypes from 'prop-types';

const Feedback = ({ reviews, partPos }) => {
  const { good, neutral, bad } = reviews;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <ul>
        <li>Good: {reviews.good}</li>
        <li>Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {partPos}%</li>
      </ul>
    </>
  );
};

// Валідація пропсів
Feedback.propTypes = {
  reviews: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  partPos: PropTypes.number.isRequired,
};

export default Feedback;