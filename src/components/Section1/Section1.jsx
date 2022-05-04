import { Step } from "./components";
import bgimage from "./images/bgimage.png";
import burger from "./images/burger.png";
import phone from "./images/phone.png";
import mail from "./images/mail.png";
import download from "./images/download.png";
import circletext from "./images/circle-text.png";
import face from "./images/face.png";
import polygon from "./images/polygon.png";
import logo from "./images/logo.png";
import image01 from "./images/01.png";
import image02 from "./images/02.png";
import image03 from "./images/03.png";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <>
      <div className={styles.bgglass}></div>
      <div className={styles.image}>
        <img src={bgimage} alt="bg" className={styles.bgimage} />
      </div>
      <div className={styles.layout}>
        <div className={styles.header}>
          <img
            src={burger}
            alt="btext-align: right;urger"
            className={styles.burger_image}
          />
          <img src={logo} alt="burger" className={styles.logo_image} />
          {/*<div className={styles.email}>Пишите нам на email</div>*/}
          {/*<div className={styles.email}>info@diagnostics.by</div>*/}
          <div className={styles.email_box}>
            <p className={styles.text}>Пишите нам на email</p>
            <div className={styles.email}>
              <img src={mail} alt="" />
              <p className={styles.email_text}>info@diagnostics.by</p>
            </div>
          </div>
          <div className={styles.contact_box}>
            <div className={styles.contact}>
              <img src={phone} alt="" />
              <p className={styles.text}>Есть вопросы? Звоните!</p>
            </div>
            <p className={styles.contact_text}>+375 (29) 456-45-45</p>
          </div>
        </div>
        <div className={styles.lines}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.content}>
          <div className={styles.text_block}>
            <p className={styles.header_text}>
              Независимое обследование зданий и сооружений
            </p>
            <p className={styles.second_text}>
              антенн, труб, теплосетей, канализаций и других объектов
              строительства
            </p>
          </div>
          <div className={styles.button_block}>
            <button className={styles.button}>
              <img src={download} alt="" />
              Получить коммерческое
            </button>
            <p className={styles.second_text}>
              Отправьте техзадание и получите коммерческое предложение в течении
              15 минут на свой email или в мессенджер
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <Step text="Начинаем работать без аванса" image={image01} />
          <Step text="Предоставляем отсрочку платежа" image={image02} />
          <Step text="Всегда называем справедливую цену" image={image03} />
          {/*<img src={video} alt="" className={styles.video} />*/}
          <div className={styles.circle_image}>
            <img src={circletext} alt="" className={styles.video} />
            <img src={face} alt="" className={styles.face} />
            <img src={polygon} alt="" className={styles.polygon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
