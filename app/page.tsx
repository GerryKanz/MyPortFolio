import Image from "next/image";
import styles from "./page.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>


      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <div>Computer Science graduate and a Front-end developer who loves building modern and user-friendly websites. I have experience working with React/React Native, Next.js, Typscript and other tools to create responsive and efficient web applications.
            I enjoy problem solving and turning ideas into real, working solutions.
            <p className={styles.name}>Gerald Kanzara</p>
          </div>

          <div>
            <Image
              width={250}
              height={250}
              src='/portforlioImg.jpg'
              alt="Img here"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomLinksContainer}>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}> Personal projects <FaArrowCircleRight /> </a>
          <a href="#" className={styles.bottomLink}> About me <FaArrowCircleRight /></a>
        </div>
      </div>

    </div>
  );
}
