import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
      <ul className={css.feedbackList}>
      <li className={css.feedbackCount}>Good: {good}</li>
      <li className={css.feedbackCount}>Neutral: {neutral}</li>
      <li className={css.feedbackCount}>Bad: {bad}</li>
      <li className={css.feedbackCount}>Total: {totalFeedback}</li>
      <li className={css.feedbackCount}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback