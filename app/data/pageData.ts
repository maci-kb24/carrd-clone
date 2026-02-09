import { Block } from "../blocks/types";

export const pageData: { blocks: Block[] } = {
  blocks: [
    {
      type: 'text',
      props: { content: 'Welcome to my page!' }
    },
    {
      type: 'button',
      props: { label: 'Get started', href: 'https://example.com' }
    },
    {
      type: 'image',
      props: { src: 'https://placehold.co/400', alt: 'Example image', width: 500, height: 500 }
    }
  ]
};


