import PropTypes from "prop-types";
import styles from "./Instrument.module.css";

const Instrument = ({ image, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bg_mask}>
        <img src={image} alt="" className={styles.image} />
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

Instrument.propTypes = {};

export default Instrument;
