import tv from "./images/tv.png";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_box}>
        <p className={styles.header_text}>
          Мы работаем быстро и наши отчеты проходят согласование с первого раза
        </p>
        <p className={styles.second_text}>
          Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров
          проектов) с опытом работы от 6 лет и 2 штатных сотрудника для
          камеральных работ
        </p>
      </div>
      <img src={tv} alt="" className={styles.tv_image} />
      <div className={styles.list_box}>
        <p className={styles.header2_text}>Вы и Ваши архитекторы получаете:</p>
        <ul className={styles.list}>
          <li>
            <p>Отчет на который на 100% можно положиться</p>
          </li>
          <li>
            <p>Экономию времени и прогнозируемость сроков</p>
          </li>
          <li>
            <p>Предварительные результаты сразу на месте</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
