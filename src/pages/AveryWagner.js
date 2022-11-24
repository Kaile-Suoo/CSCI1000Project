import React from "react";
import Typewriter from "typewriter-effect";

import Image from "next/image";
import avery1 from "../public/avery-assets/avery1.jpeg";

import styles from "../styles/Avery.module.css";

import { FadeInChar } from "../components/FadeInChar";
import { StaggerWrap } from "../components/StaggerWrap";
import { FadeInUpBox } from "../components/FadeInUpBox";

export default function averyPage() {
  return (
    <div className={styles.container}>
      <title>Avery's Page</title>
      <link rel="icon" href="/favicon.ico" />

      <main>
        <StaggerWrap delayOrder={1} childrenDelay={5.2} ease="backInOut">
          <div className={styles.welcome_box}>
            <div className={styles.title}>
              {/* <FadeInUpBox yOffset={65} duration={1} delayOrder={1}> */}
              <Typewriter
                options={{
                  cursor: " ",
                  delay: 120,
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(800);
                  typewriter
                    .typeString("hello!")

                    .callFunction(() => {
                      console.log("successfully called TypingEffect()");
                    })
                    .pauseFor(5500)
                    .start();
                }}
              />
              {/* </FadeInUpBox> */}
            </div>

            {/* <FadeInUpBox
              yOffset={50}
              duration={1}
              delayOrder={2}
              className={styles.subtitle}
            > */}
              <div className={styles.subtitle}>
              <FadeInChar text="I'm Avery Wagner"></FadeInChar>
              </div>
            {/* </FadeInUpBox> */}
          </div>

          <FadeInUpBox yOffset={30} duration={1} delay={20} delayOrder={3}>
            <Image
              src={avery1}
              alt="Avery Wagner"
              width={480}
              height={325}
              className={styles.pic}
            />
          </FadeInUpBox>

          <div className={styles.description}>
            <FadeInUpBox yOffset={25} duration={1} delayOrder={4}>
              <p>Currently, I am a first-year student in CU's College of
              Engineering, majoring in Computer Science. When I'm not doing
              hefty loads of homework, I enjoy spending my spare time outside
              skiing, golfing, or playing soccer with friends and family. Art
              and music are also important passions of mine -- whether it be
              drawing, graphic design, playing the viola or picking up a guitar,
              I always try to keep some creative outlet close to me.</p>
            </FadeInUpBox>
            <FadeInUpBox yOffset={25} duration={1} delayOrder={5}>
              <p>Career wise, I'm keeping my options open and still exploring
              different paths to take. Lots of different fields within CS
              interest me; at the moment, some sort of career in Software
              Development or Engineering is what I'm leaning towards.</p>
            </FadeInUpBox>
          </div>
          {/* <FadeInUpBox yOffset={2} duration={1} delayOrder={6}> */}
        </StaggerWrap>
        <a className={styles.button} href="/">
          <p> Back to Home Page</p>
        </a>
        {/* </FadeInUpBox> */}
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 1rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        h2,
        h3,
        h4,
        h5 {
          font-weight: normal;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
