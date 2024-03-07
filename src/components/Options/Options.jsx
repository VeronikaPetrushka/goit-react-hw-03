import css from './Options.module.css'

const Options = ({ setFeedback, totalFeedback, handleReset }) => {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <ul className={css.feedbackOptions}>
      <li>
        <button type='submit' onClick={() => handleFeedback('good')}>Good</button>
      </li>
      <li>
        <button type='submit' onClick={() => handleFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button type='submit' onClick={() => handleFeedback('bad')}>Bad</button>
      </li>
    {totalFeedback !== 0 && (
      <li>
        <button type='submit' onClick={handleReset}>Reset</button>
      </li>
    )}
    </ul>
  );
};

export default Options