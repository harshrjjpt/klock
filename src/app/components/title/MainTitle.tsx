"use client";
import { useEffect, useState } from "react";
import styles from "./MainTitle.module.css";

export default function MainTitle() {
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
    if (window.scrollY > 100) {
      // Change the scroll position threshold as needed
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return <h1 className={`${styles.mainTitle} ${scrolling ? styles.scrolledMainTitle : ""}`}>Klocks</h1>;
}
