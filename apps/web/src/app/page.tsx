import { Button } from '@repo/ui/components/button';
import { SanityButtons } from '@/components/sanity-buttons';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <SanityButtons
          buttons={[
            {
              _key: '1',
              _type: 'button',
              text: 'Button',
              href: '/',
              openInNewTab: false,
              variant: 'outline',
            },
          ]}
        />
      </div>
    </div>
  );
}
