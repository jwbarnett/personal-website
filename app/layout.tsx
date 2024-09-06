import '@/app/ui/global.css';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'James Barnett'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="mt-12 m-auto max-w-4xl leading-relaxed">
          <div className="mb-20">
            <div>
              <Link href="/" className="hover:underline text-4xl mx-5">James Barnett</Link>
            </div>
            <ul className="flex justify-end gap-x-5 mx-5">
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="https://photos.barnett.dev" className="hover:underline">Photos</Link>
              </li>
            </ul>
          </div>
        
          <main>{children}</main>

        </div>
      </body>
    </html>
  )
}