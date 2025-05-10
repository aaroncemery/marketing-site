import { defineQuery } from 'next-sanity';

// Base fragments for reusable query parts
const imageFragment = /* groq */ `
  image{
    ...,
    'alt': coalesce(asset->altText, asset->originalFilename, 'Image-Broken'),
    'blurData': asset->metadata.lqip,
    'dominantColor': asset->metadata.palette.dominant.background,
  }
`;

const customLinkFragment = /* groq */ `
  ...customLink{
    openINewTab,
    'href': select(
      type == 'internal' => internal.slug.current,
      type == 'external' => external,
      '#',
    ),
  }
`;
