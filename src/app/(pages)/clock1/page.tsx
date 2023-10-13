import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar";
import Clock from "@/app/components/GlitchText/GlitchText";
import styles from "./clock1.module.css";

export default function Clock1() {
  return (
    <main className={styles.clock1}>
      <Navbar />
      <div className={styles.clockContainer}>
        <Clock />
      </div>
    </main>
  );
}
