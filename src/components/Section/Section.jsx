import PropTypes from "prop-types";
import styles from './section.module.css'
import FeedbackOptions from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

const Section = ({ title, options}) => {

if (options.state.total === 0) {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            <FeedbackOptions options={options} onLeaveFeedback={'good'} />
            <FeedbackOptions options={options} onLeaveFeedback={'neutral'} />
            <FeedbackOptions options={options} onLeaveFeedback={'bad'} />
            <h2 className={styles.title}>Statistics</h2>
            <Notification message="There is no feedback" />
        </section>
    )
}
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            <FeedbackOptions options={options} onLeaveFeedback={'good'} />
            <FeedbackOptions options={options} onLeaveFeedback={'neutral'} />
            <FeedbackOptions options={options} onLeaveFeedback={'bad'} />
            <h2 className={styles.title}>Statistics</h2>
            <Statistics good={options.state.good} neutral={options.state.neutral} bad={options.state.bad} total={options.state.total} positivePercentage={options.state.positivePercentage} />
        </section>
        
    );
};

export default Section;

Section.propTypes = {
    options: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}