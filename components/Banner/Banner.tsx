import Image from "next/image";

type Props = {
  src: StaticImageData;
};

export const Banner = ({ src }: Props) => {
  return <Image src={src} alt="Picture of the author" priority />;
};
