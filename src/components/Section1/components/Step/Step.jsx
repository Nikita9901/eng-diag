import PropTypes from "prop-types";
import styles from "./Step.module.css";

const Step = ({ image, text }) => {
  return (
    <div className={styles.image_with_text}>
      <img src={image} alt="" className={styles.image} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

Step.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Step;
