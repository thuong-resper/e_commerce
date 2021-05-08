import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import styles from "./styles.module.css";

export default function Circular({ size, color }) {
  return (
    <div className={styles.root}>
      <CircularProgress size={size} color={color} />
    </div>
  );
}
