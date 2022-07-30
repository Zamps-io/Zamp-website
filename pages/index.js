import Head from "next/head";
import Header from "../compoments/Header";
import Header2 from "../compoments/Header2";
import LotteryEntrance from "../compoments/LotteryEntrance";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2 /> 
      <LotteryEntrance/>
    </div>
  );
}
