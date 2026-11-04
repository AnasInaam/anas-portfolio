import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anas Mirza | AI/ML Engineer & Software Developer',
  description: 'Portfolio of Mohammad Anas Aarif Baig Mirza — AI/ML enthusiast, software developer and technical researcher.',
  keywords: ['Anas Mirza', 'AI/ML', 'Software Developer', 'TensorFlow', 'MediaPipe', 'Next.js', 'Computer Vision'],
  openGraph: { title: 'Anas Mirza | Portfolio', description: 'Building intelligent solutions through AI, machine learning and software engineering.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
