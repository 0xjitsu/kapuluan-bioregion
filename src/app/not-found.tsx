import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-semibold text-deep-green">
        Place not found
      </h1>
      <p className="mt-2 text-muted">
        This entry is not in the atlas yet — incomplete by design.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-deep-green underline"
      >
        Return home
      </Link>
    </main>
  );
}
