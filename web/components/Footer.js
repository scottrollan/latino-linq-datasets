import React from "react";
import styles from "./Footer.module.css";
import SimpleBlockContent from "./SimpleBlockContent";

function Footer(props) {
  const { text } = props;
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  );
}

export default Footer;
