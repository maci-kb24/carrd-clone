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