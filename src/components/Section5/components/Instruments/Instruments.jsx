import PropTypes from "prop-types";
import { Instrument } from "../Instrument";
import styles from "./Instruments.module.css";

const Instruments = ({ instrumentsList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollbar}>
        <div className={styles.scrolling_wrapper}>
          {instrumentsList.map(({ image, description }) => {
            return <Instrument image={image} description={description} />;
          })}
        </div>
        <div className={styles.scrollbar_block}></div>
      </div>
    </div>
  );
};

Instruments.propTypes = {
  instrumentsList: PropTypes.array,
};

export default Instruments;
