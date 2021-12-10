import { HTMLAttributes } from "react";
import cx from 'classnames';
import styles from "./Button.module.scss";

interface Props extends Omit<HTMLAttributes<HTMLAnchorElement>, 'children'> {
  children: string;
}

export const Button = (props: Props) => (
  <a {...props} className={cx(styles.button, props.className)}>
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
    </svg>
    <span>{props.children}</span>
  </a>
);

Button.displayName = "Button";
