import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Kapuluan exists — a Philippine bioregion atlas for place-based organizers.",
};

function AboutHeader() {
  return <Header />;
}

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Suspense fallback={<div className="h-16 border-b border-ring/40 bg-bone" />}>
        <AboutHeader />
      </Suspense>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
        <p className="text-sm font-medium uppercase tracking-wide text-umber">
          About
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-deep-green">
          Kapuluan
        </h1>
        <p className="mt-1 text-lg text-muted">Living by watershed &amp; sea</p>

        <div className="prose-kapwa mt-8 space-y-5 text-base leading-relaxed text-ink/90">
          <p>
            Kapuluan is a public knowledge commons of place-based organizers
            working across Philippine watersheds, coasts, and ancestral domains.
            It is a living atlas — not a finished inventory.
          </p>

          <h2 className="font-display text-xl font-semibold text-deep-green">
            Why this gap exists
          </h2>
          <p>
            Global bioregional maps and directories — including the inspiring
            work at{" "}
            <a
              href="https://bioregioning.earth"
              className="font-medium text-deep-green underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              bioregioning.earth
            </a>{" "}
            — often leave the Philippine archipelago thinly represented. Kapuluan
            starts to fill that gap from the islands outward: by watershed and
            sea, not by province alone.
          </p>

          <h2 className="font-display text-xl font-semibold text-deep-green">
            Incomplete by design
          </h2>
          <p>
            Eight seeds are not the whole archipelago. Entries will grow,
            correct, and deepen as organizers share sources. Absence here is not
            absence of care on the ground — only that this commons has not yet
            caught up.
          </p>

          <h2 className="font-display text-xl font-semibold text-deep-green">
            Kapwa
          </h2>
          <p>
            Kapwa — shared self — is the ethic: we map relations of care, not
            extractive listings. Places and peoples remain more than points on a
            map.
          </p>

          <h2 className="font-display text-xl font-semibold text-deep-green">
            Credits &amp; lineage
          </h2>
          <p>
            Pattern and spirit lean on the bioregional knowledge commons stewarded
            with care by{" "}
            <a
              href="https://bioregioning.earth"
              className="font-medium text-deep-green underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrea Farias
            </a>
            ,{" "}
            <a
              href="https://www.r3-0.org"
              className="font-medium text-deep-green underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              r3.0
            </a>
            , and{" "}
            <a
              href="https://bioregioning.earth"
              className="font-medium text-deep-green underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              bioregioning.earth
            </a>
            . Kapuluan is a local cousin, not a clone.
          </p>
        </div>

        <p className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium text-deep-green underline-offset-2 hover:underline"
          >
            ← Back to atlas
          </Link>
        </p>
      </main>
      <footer className="border-t border-ring/40 px-4 py-4 text-center text-xs text-muted">
        Kapuluan — Philippine Bioregion Atlas · knowledge commons
      </footer>
    </div>
  );
}
