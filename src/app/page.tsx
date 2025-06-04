export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1 className="text-3xl font-bold">mattdav.is</h1>
      <p>Welcome to my corner of the internet.</p>
      <p className="flex gap-4">
        <a href="/photos" className="underline">Photography</a>
        <a href="/projects" className="underline">Projects</a>
        <a href="/blog" className="underline">Blog</a>
        <a href="/contact" className="underline">Contact</a>
      </p>
    </div>
  );
}
