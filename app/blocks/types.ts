export type TextBlockData = {
  type: 'text';
  props: {
    content: string;
  };
};

export type ButtonBlockData = {
  type: 'button';
  props: {
    label: string;
    href: string;
    width?: number;
    height?: number;
  };
};

export type ImageBlockData = {
  type: 'image';
  props: {
    src: string;
    alt: string;
  };
};

export type BlockData = TextBlockData | ButtonBlockData | ImageBlockData;