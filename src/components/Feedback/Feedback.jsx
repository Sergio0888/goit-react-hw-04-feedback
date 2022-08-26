import styles from './feedback.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options , onLeaveFeedback }) => {
   const keys = Object.keys(onLeaveFeedback)
    return (
        <>
        <button className={styles.btn} onClick={() => {options(keys[0])}}>{keys[0]}</button>
        <button className={styles.btn} onClick={() => {options(keys[1])}}>{keys[1]}</button>
        <button className={styles.btn} onClick={() => {options(keys[2])}}>{keys[2]}</button>
        </>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.func.isRequired,
    onLeaveFeedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired
      })
}