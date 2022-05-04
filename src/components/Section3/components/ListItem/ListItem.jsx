import PropTypes from "prop-types";
import vector from "./images/vector.png";
import styles from "./ListItem.module.css";

const ListItem = ({ image, text, description }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={text} className={styles.image} />
      <p className={styles.header}>{text}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.more}>
        <p className={styles.more_text}>Подробнее</p>
        <img src={vector} alt="" className={styles.more_image} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
