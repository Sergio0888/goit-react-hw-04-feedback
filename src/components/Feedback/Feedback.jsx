import styles from './feedback.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options , onLeaveFeedback }) => {
    return (
        <>
        <button className={styles.btn} onClick={() => {options(onLeaveFeedback)}}>{onLeaveFeedback}</button>
        </>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.func.isRequired,
    onLeaveFeedback: PropTypes.string.isRequired
}