import Section from './Section/Section';
import { Component } from 'react';

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

    return (
        <>
        <Section title="Please leave feedback" options={this} />
        </>
    )
}
}

export default App;


