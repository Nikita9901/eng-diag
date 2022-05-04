import { Instruments } from "./components";
import item1 from "./images/item1.png";
import item2 from "./images/item2.png";
import item3 from "./images/item3.png";
import item4 from "./images/item4.png";
import styles from "./Section5.module.css";
import { useEffect, useState } from "react";

const Section5 = () => {
  const [instrumentsList, setInstrumentsList] = useState([]);
  useEffect(() => {
    setInstrumentsList([
      {
        image: item1,
        description: "Локатор арматуры “Profoscope”",
      },
      {
        image: item2,
        description: "Измеритель прочности бетона “ОНИКС-1”",
      },
      {
        image: item3,
        description: "Прибор ультразвукового действия “ПУЛЬСАР-2”",
      },
      {
        image: item4,
        description: "Измеритель прочности бетона “Молоток Шмидта”",
      },
      {
        image: item1,
        description: "Локатор арматуры “Profoscope”",
      },
      {
        image: item2,
        description: "Измеритель прочности бетона “ОНИКС-1”",
      },
      {
        image: item3,
        description: "Прибор ультразвукового действия “ПУЛЬСАР-2”",
      },
      {
        image: item4,
        description: "Измеритель прочности бетона “Молоток Шмидта”",
      },
      {
        image: item1,
        description: "Локатор арматуры “Profoscope”",
      },
      {
        image: item2,
        description: "Измеритель прочности бетона “ОНИКС-1”",
      },
      {
        image: item3,
        description: "Прибор ультразвукового действия “ПУЛЬСАР-2”",
      },
      {
        image: item4,
        description: "Измеритель прочности бетона “Молоток Шмидта”",
      },
      {
        image: item1,
        description: "Локатор арматуры “Profoscope”",
      },
      {
        image: item2,
        description: "Измеритель прочности бетона “ОНИКС-1”",
      },
      {
        image: item3,
        description: "Прибор ультразвукового действия “ПУЛЬСАР-2”",
      },
      {
        image: item4,
        description: "Измеритель прочности бетона “Молоток Шмидта”",
      },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.step_text}>Шаг №2</p>
      <p className={styles.step_header_text}>
        Детальное инструментальное обследование
      </p>

      <p className={styles.second_text}>
        Мы понимаем насколько важны сроки и сколько может стоить день задержки.
        Поэтому Вы никогда не услышите от нас слов “надо подождать пару дней,
        пока освободится арендное оборудование” - мы укомплектованы всем
        необходимым
      </p>
      <Instruments instrumentsList={instrumentsList} />
    </div>
  );
};

export default Section5;
