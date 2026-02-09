import Image from "next/image";

type ImageBlockProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt, width = 500, height = 500 }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};