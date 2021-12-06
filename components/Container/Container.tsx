import React, { HTMLAttributes } from "react";
import cx from 'classnames';
import styles from "./Container.module.scss";

export const Container = (props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cx(styles.container, props.className)} />
);
