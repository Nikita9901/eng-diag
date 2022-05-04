import { useEffect, useState } from "react";
import { ListItem } from "./components";
import bgimage from "./images/bg.png";
import image01 from "./images/01.png";
import image02 from "./images/02.png";
import image03 from "./images/03.png";
import styles from "./Section3.module.css";

const Section3 = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    setWorks([
      {
        image: image01,
        text: "Общее обследование",
        description:
          "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.",
      },
      {
        image: image02,
        text: "Тепловизионная съемка",
        description:
          "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
      },
      {
        image: image03,
        text: "Телеинспекция инженерных сетей",
        description:
          "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
      },
      {
        image: image02,
        text: "Тахеометрическая съемка",
        description:
          "Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве",
      },
      {
        image: image01,
        text: "Телеинспекция инженерных сетей",
        description:
          "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
      },
    ]);
  }, []);
  return (
    <>
      <div className={styles.bgglass}></div>
      <div className={styles.image}>
        <img src={bgimage} alt="bg" className={styles.bgimage} />
      </div>
      <div className={styles.lines}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.layout}>
        <p className={styles.header}>Услуги</p>
        <p className={styles.second_text}>
          Выполняем как комплексное обследование, так и отдельные виды работ
        </p>
        <div className={styles.scrollbar}>
          <div className={styles.scrolling_wrapper}>
            {works.map((el) => {
              return (
                <ListItem
                  key={el.text}
                  className={styles.card}
                  description={el.description}
                  text={el.text}
                  image={el.image}
                />
              );
            })}
          </div>
          <div className={styles.scrollbar_block}></div>
        </div>
      </div>
    </>
  );
};

export default Section3;
