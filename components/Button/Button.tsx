import { HTMLAttributes } from "react";
import cx from 'classnames';
import styles from "./Button.module.scss";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  children: string;
}

export const Button = (props: Props) => (
  <button {...props} className={cx(styles.button, props.className)}>
    <span>{props.children}</span>
  </button>
);

Button.displayName = "Button";
