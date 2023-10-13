import React from "react";
import styles from "./Capsule.module.css";

interface CapsuleProps {
  name: string;
}

export default function Capsule({ name }: CapsuleProps) {
  return (
    <div className={styles.capsuleContainer}>
      <h1 className={styles.capsuleTitle}>{name}</h1>
    </div>
  );
}
