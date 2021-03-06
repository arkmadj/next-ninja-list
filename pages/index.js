import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          sit, fugit fugiat error, perferendis dicta consequuntur consectetur
          voluptate animi, velit ab. Atque laboriosam rerum ab! Labore a iusto
          corporis expedita.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          sit, fugit fugiat error, perferendis dicta consequuntur consectetur
          voluptate animi, velit ab. Atque laboriosam rerum ab! Labore a iusto
          corporis expedita.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
