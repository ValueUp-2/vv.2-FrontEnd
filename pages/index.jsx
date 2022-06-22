import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> ValueUp v.2 </title>{" "}
        <meta
          name="description"
          content="대외활동, 동아리 등 대학생, 취준생들을 위한 플랫폼"
        />
      </Head>
      <main>
        <h1>Main Page</h1>
      </main>
    </div>
  );
}
