import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import Countdown from "react-countdown";

const inter = Inter({ subsets: ["latin"] });

const date = new Date("March 28, 2023 18:00:00 EDT");

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <h2 className={styles.space}>Next Game is NOW!</h2>;
  } else {
    // Render a countdown
    return (
      <h2 className={styles.space}>
        Next Game is in:
        <br /> {days} day{days == 1 ? "" : "s"}, {hours} hour
        {hours == 1 ? "" : "s"}, {minutes} minute{minutes == 1 ? "" : "s"} and{" "}
        {seconds} seconds
      </h2>
    );
  }
};

export default function Home() {
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>Hemlock Soccer</title>
        <meta name="description" content="Where great men get their cardio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.space}>Hemlock Soccer</h1>
          <Countdown date={date} renderer={renderer} />
          <h2 className={styles.space}>Location: Taylor Sportsplex</h2>
          <h2 className={styles.space}>Date: {date.toLocaleString()}</h2>
        </div>
      </main>
    </>
  );
}
