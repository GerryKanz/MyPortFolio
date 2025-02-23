import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="pageTitle">
        <h1>SoftWare Engineer</h1>
      </div>


      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <div>
              <p>I enjoy problem solving and turning ideas into real, working solutions.
              </p>
              <p className={styles.name}>Gerald Kanzara</p>
            </div>

            <div className={styles.IntroImg}>
              <Image
                width={250}
                height={250}
                src='/geraldkan.jpg'
                alt="Gerald's Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
