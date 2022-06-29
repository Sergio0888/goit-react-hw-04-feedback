import Section from './Section/Section';
import { Component } from 'react';
import styles from './Section/section.module.css'
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

countTotalFeedback() {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total
};

countPositiveFeedbackPercentage() {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;

  if (total === 0) {
    return 0
  }
  const percentage = Math.floor(good / (good + neutral + bad) * 100);
  return percentage
};


handleClick = (propName) => {

  this.setState(prevState => {
    return {
        [propName]: prevState[propName] +1
    }
   });
   
};

render() {
  const {handleClick} = this;
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;

  
    return (
        <Section title="Please leave feedback">
            <FeedbackOptions options={handleClick} onLeaveFeedback={this.state} />
            <h2 className={styles.title}>Statistics</h2>
            {total > 0 ? (
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            ) : (
              <Notification message="There is no feedback" />
            )}   
        </Section>
    );
  };
};

export default App;


