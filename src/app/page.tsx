import { clsx } from 'clsx/lite';

export default function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-6"
      style={{ minHeight: '60vh' }}
    >
      <h1 className="text-4xl font-bold tracking-wide">mattdav.is</h1>
      <p className="max-w-prose">
        Welcome to my corner of the internet where I share photos and code.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/photos"
          className={clsx(
            'px-4 py-2 border rounded hover:bg-gray-50',
            'dark:hover:bg-gray-900'
          )}
        >
          Photography
        </a>
        <a
          href="/projects"
          className={clsx(
            'px-4 py-2 border rounded hover:bg-gray-50',
            'dark:hover:bg-gray-900'
          )}
        >
          Projects
        </a>
        <a
          href="/blog"
          className={clsx(
            'px-4 py-2 border rounded hover:bg-gray-50',
            'dark:hover:bg-gray-900'
          )}
        >
          Blog
        </a>
        <a
          href="/contact"
          className={clsx(
            'px-4 py-2 border rounded hover:bg-gray-50',
            'dark:hover:bg-gray-900'
          )}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
