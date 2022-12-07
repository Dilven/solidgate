import { AnchorHTMLAttributes } from "react";
import cx from "classnames";
import styles from "./ButtonLink.module.scss";

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: string;
  inverted?: boolean;
}

export const ButtonLink = ({inverted, ...props}: Props) => (
  <a
    {...props}
    className={cx(
      styles.button,
      inverted && styles.inverted,
      props.className
    )}
    tabIndex={0}
  >
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    <span>{props.children}</span>
  </a>
);

ButtonLink.displayName = "ButtonLink";
