type TextBlockProps = {
  content: string;
};

export const TextBlock: React.FC<TextBlockProps> = ({ content }) => {
  return <p>{content}</p>;
};