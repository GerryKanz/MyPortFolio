import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1>SoftWare Engineer</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <div>
              <p>Computer Science graduate and a Front-end developer who loves building modern and user-friendly websites. I have experience working with React/React Native, Next.js, Typscript and other tools to create responsive and efficient web applications.
                I enjoy problem solving and turning ideas into real, working solutions.
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
