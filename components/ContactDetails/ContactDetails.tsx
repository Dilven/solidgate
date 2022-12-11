import Link from "next/link";
import { ReactNode } from "react";
import styles from "./ContactDetails.module.scss";

interface Props {
  readonly name?: string;
  readonly children: ReactNode;
}

const ContactItem = ({ name, children }: Props) => {
  if (!name) return <li>{children}</li>;
  return (
    <li>
      <strong className={styles.contactName}>{name}</strong>: {children}
    </li>
  );
};

export const ContactDetails = () => {
  return (
    <ul className={styles.contacts}>
      <ContactItem>Pątnów 67</ContactItem>
      <ContactItem>98-335 Pątnów</ContactItem>
      <ContactItem>Zenon Mateusiak</ContactItem>
      <ContactItem name="mail">
        <Link href="mailto:biuro@solidgate.pl" passHref className={styles.mail}>
          biuro@solidgate.pl
        </Link>
      </ContactItem>
      <ContactItem name="tel">
        <Link href="callto://+607942224" passHref className={styles.phone}>
          607942224
        </Link>
      </ContactItem>
    </ul>
  );
};
