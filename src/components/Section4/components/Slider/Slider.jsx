import PropTypes from "prop-types";
import { Carousel } from "antd";
import styles from "./Slider.module.css";

const Slider = ({ photos }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((current) => {
  //       return current >= photos.length - 1 ? 0 : current + 1;
  //     });
  //   }, 2000);
  //   return () => clearInterval();
  // }, []);
  // console.log(activeIndex);
  // return (
  //   <div className={styles.slider}>
  //     <div className={styles.slider_img} key={activeIndex}>
  //       <img src={photos[activeIndex]} alt="" />
  //     </div>
  //   </div>
  // );
  // let offset = 0;
  // const sliderLine = document.querySelector(".slider_block");
  // document.querySelector(".slider_next").addEventListener("click", () => {
  //   offset += 960;
  //   sliderLine.style.left = offset + "px";
  // });
  // const nextSlide = () => {
  //   changeCssVariables(-960);
  // };
  // const prevSlide = () => {
  //   changeCssVariables(960);
  // };
  // return (
  //   <>
  //     <div className={styles.slider}>
  //       <div className={styles.slider_block}>
  //         {photos.map((photo, index) => {
  //           return (
  //             <img src={photo} alt="" key={index} className={styles.image} />
  //           );
  //         })}
  //       </div>
  //     </div>
  //     <button className={styles.slider_next} onClick={nextSlide}>
  //       next
  //     </button>
  //   </>
  // );
  return (
    <div className={styles.slider}>
      <Carousel autoplay>
        {photos.map((photo, index) => {
          return (
            <img src={photo} alt="" key={index} className={styles.image} />
          );
        })}
      </Carousel>
    </div>
  );
};

Slider.propTypes = {
  photos: PropTypes.array,
};

export default Slider;
