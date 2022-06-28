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
    total: 0,
    positivePercentage: 0
  };

countTotalFeedback() {
  const totalFeedback = this.state.total + 1;
  this.setState({total: totalFeedback});
  return
};

countPositiveFeedbackPercentage() {
  return this.setState(prevState => {
    const percentage = Math.floor(prevState.good / prevState.total * 100);
    
    return prevState.positivePercentage = percentage;
  })
};


handleClick = (propName) => {

  this.setState(prevState => {
    return {
        [propName]: prevState[propName] +1
    }
   });
   
   this.countTotalFeedback()
   this.countPositiveFeedbackPercentage();
};

render() {
  
  const {handleClick} = this;

  if (this.state.total === 0) {
    return (
        <Section title="Please leave feedback">
            <FeedbackOptions options={handleClick} onLeaveFeedback={'good'} />
            <FeedbackOptions options={handleClick} onLeaveFeedback={'neutral'} />
            <FeedbackOptions options={handleClick} onLeaveFeedback={'bad'} />
            <h2 className={styles.title}>Statistics</h2>
            <Notification message="There is no feedback" />
        </Section>
    )
  }
  return (
    <Section title="Please leave feedback">
            <FeedbackOptions options={handleClick} onLeaveFeedback={'good'} />
            <FeedbackOptions options={handleClick} onLeaveFeedback={'neutral'} />
            <FeedbackOptions options={handleClick} onLeaveFeedback={'bad'} />
            <h2 className={styles.title}>Statistics</h2>
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage} />
    </Section>
    )
  }
}

export default App;


