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
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>EMBRACE</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>ELEGANCE</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>TRANSFORM</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>YOUR</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>PC</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>WITH</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>DIGITAL</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>WATCH</span>{" "}
        <span className={`${styles.split} ${scrolling ? styles.scrollText : ""}`}>SCREENSAVERS</span>
      </h1>
    </section>
  );
}
