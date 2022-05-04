import { useEffect, useState } from "react";
import { Slider } from "./components";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import face from "./images/face.png";
import styles from "./Section4.module.css";

const Section4 = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos([img1, img2, img3]);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.header}>Мы работаем в комплексе</p>
        <p className={styles.second_text}>
          чтобы Вы не тратили время на поиск и организацию <br /> множества
          подрядчиков
        </p>
      </div>
      <div className={styles.step1_block}>
        <Slider photos={photos} />
        <div className={styles.mask}>
          <div className={styles.text_block}>
            <div className={styles.step_header}>
              <div>
                <p className={styles.step_text}>Шаг №1</p>
              </div>
              <p className={styles.step_header_text}>Подготовительные работы</p>
            </div>
            <div className={styles.step_second}>
              <p className={styles.step_second_text}>
                Мы осматриваем здание, делаем замеры и проверяем
                <br /> наличие визуально заметных дефектов: трещин, коррозии,
                повреждения фундамента и т.д.{" "}
              </p>
            </div>
            <div className={styles.quote}>
              <div className={styles.bg_image}>
                <img src={face} alt="" className={styles.image} />
              </div>

              <p className={styles.quote_text}>
                “Задача этого этапа получить максимально полное представление о
                конструкции здания, условиях его эксплуатации и возможных слабых
                местах“
              </p>
            </div>
            <p className={styles.quote_author}>
              АЛЕКСЕЙ, обследователь и главный инженер проектов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
