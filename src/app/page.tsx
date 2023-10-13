import Image from "next/image";
import styles from "./page.module.css";
import MainTitle from "./components/title/MainTitle";
import Capsule from "./components/Capsule/Capsule";
import Navbar from "./components/Navbar/Navbar";
import Clock from "./components/GlitchText/GlitchText";
import About from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.mainSection}>
        <MainTitle></MainTitle>
      </section>
      <section className={styles.secondSection}></section>
      <About></About>
    </main>
  );
}
