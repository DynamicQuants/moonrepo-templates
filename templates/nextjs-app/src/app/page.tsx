import type { Metadata } from 'next';

import { getMessage } from '@actions/get-message';
import Hero from '@components/hero';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
  openGraph: {
    title: 'Home',
    description: 'Home page',
  },
};

export default async function Home() {
  const message = await getMessage();
  return (
    <div className="font-sans h-screen flex flex-col items-center justify-center">
      <Hero message={message} />
    </div>
  );
}
