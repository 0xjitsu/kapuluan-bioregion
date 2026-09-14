"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Organization } from "@/data/organizations";
import Header from "./Header";
import Map from "./Map";
import GalleryView from "./GalleryView";

type ViewMode = "map" | "gallery";

function HomeInner({ organizations }: { organizations: Organization[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramView = searchParams.get("view") === "gallery" ? "gallery" : "map";
  const [view, setView] = useState<ViewMode>(paramView);

  useEffect(() => {
    setView(paramView);
  }, [paramView]);

  const onViewChange = useCallback(
    (v: ViewMode) => {
      setView(v);
      const q = v === "gallery" ? "?view=gallery" : "?view=map";
      router.replace(`/${q}`, { scroll: false });
    },
    [router]
  );

  return (
    <div className="flex min-h-full flex-col">
      <Header view={view} onViewChange={onViewChange} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <section className="mb-6">
          <h1 className="font-display text-2xl font-semibold text-deep-green sm:text-3xl">
            Living by watershed &amp; sea
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            A public knowledge commons of place-based organizers across the
            Philippine archipelago — incomplete by design, rooted in kapwa.
          </p>
        </section>

        {view === "map" ? (
          <Map organizations={organizations} />
        ) : (
          <GalleryView organizations={organizations} />
        )}
      </main>
      <footer className="border-t border-ring/40 px-4 py-4 text-center text-xs text-muted">
        Kapuluan — Philippine Bioregion Atlas · knowledge commons
      </footer>
    </div>
  );
}

export default function HomeClient({
  organizations,
}: {
  organizations: Organization[];
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-full flex-col">
          <div className="h-16 border-b border-ring/40 bg-bone" />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 text-muted">
            Loading…
          </main>
        </div>
      }
    >
      <HomeInner organizations={organizations} />
    </Suspense>
  );
}
