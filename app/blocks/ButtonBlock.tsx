type ButtonBlockProps = {
  label: string;
  href: string;
};

export const ButtonBlock: React.FC<ButtonBlockProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};