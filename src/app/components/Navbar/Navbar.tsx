import React from "react";
import styles from "./Navbar.module.css";
import Capsule from "../Capsule/Capsule";
import Link from "next/link";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.infoCapsules}>
        <ul className={styles.capsulesList}>
          <Link href="/">
            <li>
              <Capsule name="Home"></Capsule>
            </li>
          </Link>
          <Link href="/clock1">
            <li>
              <Capsule name="CLOCK 1"></Capsule>
            </li>
          </Link>
          <li>
            <Capsule name="ABOUT"></Capsule>
          </li>
        </ul>
      </div>
    </div>
  );
}
