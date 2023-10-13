"use client";
import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
interface AboutProps {}

export default function About({}: AboutProps) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Change the scroll position threshold as needed
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <section className={`${styles.aboutSection} ${scrolling ? styles.scrollBackground : ""}`}>
      <h1 className={styles.heroHeading}>
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>Content</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>for</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>brands</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>that</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>is</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>powerful,</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>evocative,</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>and</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>unforgettable.</span>
      </h1>
    </section>
  );
}
