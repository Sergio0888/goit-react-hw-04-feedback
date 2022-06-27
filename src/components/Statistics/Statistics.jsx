import styles from './statistics.module.css';
import PropTypes from "prop-types";

const Statistics = ({ good, bad, neutral, total, positivePercentage}) => {
    return (
    <>
        <p className={styles.text}>Good:<span className={styles.value}>{good}</span></p>
        <p className={styles.text}>Neutral:<span className={styles.value}>{neutral}</span></p>
        <p className={styles.text}>Bad:<span className={styles.value}>{bad}</span></p>
        <p className={styles.text}>Total:<span className={styles.value}>{total}</span></p>
        <p className={styles.text}>Positive feedback:<span className={styles.value}>{positivePercentage}%</span></p>
    </>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}