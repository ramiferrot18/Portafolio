
import Image from "next/image";
import styles from "./page.module.css"
import Head from 'next/head';
import index from "./components/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Victor Alvarado - Software Engineer</title>
        <meta name="description" content="Victor Alvarado - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <index/>
      </Head>

    </div>
  );
}


