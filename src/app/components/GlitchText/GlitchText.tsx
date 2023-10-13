"use client";
import styles from "./GlitchText.module.css";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const getTimeAsObject = () => {
    const date = new Date();
    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return { h, m, s };
  };

  const [time, setTime] = useState(getTimeAsObject());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeAsObject());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTimeAsString = () => {
    let { h, m, s } = time;

    // Pad with leading zeros
    const formattedH = h < 10 ? `0${h}` : h.toString();
    const formattedM = m < 10 ? `0${m}` : m.toString();
    const formattedS = s < 10 ? `0${s}` : s.toString();

    return `${formattedH}:${formattedM}:${formattedS}`;
  };

  const getTranslateValue = (index: number) => {
    const values = [0, 12, 29, 41, 58, 70];
    return values[index];
  };

  const timeDigits = getTimeAsString()
    .split("")
    .filter((p) => p !== ":");

  return (
    <svg className={styles.clock} viewBox="0 0 80 20" role="img">
      <g fill="currentColor">
        <circle cx="25.5" cy="6" r="1" />
        <circle cx="25.5" cy="14" r="1" />
        <circle cx="54.5" cy="6" r="1" />
        <circle cx="54.5" cy="14" r="1" />
      </g>
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        {timeDigits.map((digit, index) => (
          <g key={index} data-digit={digit} transform={`translate(${getTranslateValue(index)}, 0)`}>
            <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
            <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
            <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
            <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
            <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
            <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
            <polyline className={styles.clock__digit} strokeDasharray="52 52" strokeDashoffset="-52" points="9 1,1 1,1 19,9 19,9 10,1 10" />
            <polyline className={styles.clock__digit} strokeDasharray="27 27" strokeDashoffset="-27" points="1 1,9 1,9 19" />
            <polyline className={styles.clock__digit} strokeDasharray="61 61" strokeDashoffset="-61" points="9 10,1 10,1 1,9 1,9 19,1 19,1 10" />
            <polyline className={styles.clock__digit} strokeDasharray="52 52" strokeDashoffset="-52" points="9 10,1 10,1 1,9 1,9 19,1 19" />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default Clock;

// "use client";
// import styles from "./GlitchText.module.css";
// import React, { useEffect, useState } from "react";

// const Clock = () => {
//   const getTimeAsObject = () => {
//     const date = new Date();
//     let h = date.getHours();
//     const m = date.getMinutes();
//     const s = date.getSeconds();

//     return { h, m, s };
//   };

//   const [time, setTime] = useState(getTimeAsObject());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(getTimeAsObject());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const getTimeAsString = () => {
//     let { h, m, s } = time;
//     // Insert 0 before single digits
//     if (h < 10) h = `0${h}`;
//     if (m < 10) m = `0${m}`;
//     if (s < 10) s = `0${s}`;

//     return `${h}:${m}:${s}`;
//   };

//   const timeDigits = getTimeAsString()
//     .split("")
//     .filter((p) => p !== ":");

//   return (
//     <svg className={styles.clock} viewBox="0 0 80 20" role="img">
//       <g fill="currentColor">
//         <circle cx="25.5" cy="6" r="1" />
//         <circle cx="25.5" cy="14" r="1" />
//         <circle cx="54.5" cy="6" r="1" />
//         <circle cx="54.5" cy="14" r="1" />
//       </g>
//       <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <g data-digit="0">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//         </g>
//         <g data-digit="0" transform="translate(12,0)">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
//         </g>
//         <g data-digit="0" transform="translate(29,0)">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
//         </g>
//         <g data-digit="0" transform="translate(41,0)">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
//         </g>
//         <g data-digit="0" transform="translate(58,0)">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
//         </g>
//         <g data-digit="0" transform="translate(70,0)">
//           <polyline className={styles.clock__digit} strokeDasharray="53 53" strokeDashoffset="-53" points="1 1,9 1,9 19,1 19,1 1" />
//           <polyline className={styles.clock__digit} strokeDasharray="19 19" strokeDashoffset="-19" points="9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="1 1,9 1,9 10,1 10,1 19,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="51 51" strokeDashoffset="-51" points="1 1,9 1,9 10,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="45 45" strokeDashoffset="-45" points="1 1,1 10,9 10,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="43 43" strokeDashoffset="-43" points="9 1,1 1,1 10,9 10,9 19,1 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="52 52" strokeDashoffset="-52" points="9 1,1 1,1 19,9 19,9 10,1 10" />
//           <polyline className={styles.clock__digit} strokeDasharray="27 27" strokeDashoffset="-27" points="1 1,9 1,9 19" />
//           <polyline className={styles.clock__digit} strokeDasharray="61 61" strokeDashoffset="-61" points="9 10,1 10,1 1,9 1,9 19,1 19,1 10" />
//           <polyline className={styles.clock__digit} strokeDasharray="52 52" strokeDashoffset="-52" points="9 10,1 10,1 1,9 1,9 19,1 19" />
//         </g>
//       </g>
//     </svg>
//   );
// };

// export default Clock;
