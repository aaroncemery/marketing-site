import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { memo } from 'react';

interface IconProps extends Omit<ComponentProps<'span'>, 'src'> {
  icon?:
    | {
        svg?: string | null;
        name?: string | null;
      }
    | string
    | null;
  alt?: string; // Add alt text prop for accessibility
}

export const SanityIcon = memo(function SanityIconUnmemorized({
  icon,
  className,
  alt: altText = 'sanity-icon',
  ...props
}: IconProps) {
  const alt = typeof icon === 'object' && icon?.name ? icon?.name : altText;
  const svg = typeof icon === 'object' ? icon?.svg : icon;

  if (!svg) {
    return null;
  }

  return (
    <span
      {...props}
      className={cn(
        'flex size-12 items-center justify-center sanity-icon',
        className,
      )}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: svg }}
      role="img"
      aria-label={alt}
      title={alt}
    />
  );
});
