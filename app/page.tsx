import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className={styles.main}>
        <h1>Cloud Storage</h1>
        <p>Home page</p>
      </section>

    </main>
  );
}
