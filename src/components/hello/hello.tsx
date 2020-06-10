import React, { useState } from "react";
import { Props } from "./hello.model";
import styles from "./hello.module.css";

const Hello: React.FC<Props> = (props: Props) => {
  const { name } = props;
  const [state, setState] = useState(name);
  const title = "Hello";
  return (
    <h1 data-testid="title" className={styles.h1}>
      {title} {state}
    </h1>
  );
};

export default Hello;
