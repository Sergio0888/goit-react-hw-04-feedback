import Section from './Section/Section';
import { useState } from 'react';
import styles from './Section/section.module.css'
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (propName) => {
    setState(prevState => {
      return {
        ...prevState,
        [propName]: prevState[propName] +1
      }
     });
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const percentage = Math.floor(good / (good + neutral + bad) * 100);

  return (
    <Section title="Please leave feedback">
        <FeedbackOptions options={handleClick} onLeaveFeedback={state} />
        <h2 className={styles.title}>Statistics</h2>
        {total > 0 ? (
        <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={total} positivePercentage={percentage} />
        ) : (
          <Notification message="There is no feedback" />
        )}   
    </Section>
    );
}

export default App;


