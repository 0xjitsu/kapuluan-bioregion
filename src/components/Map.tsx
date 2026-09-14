"use client";

import dynamic from "next/dynamic";
import type { Organization } from "@/data/organizations";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[min(70vh,560px)] items-center justify-center rounded-2xl border border-ring/50 bg-bone-dark text-sm text-muted sm:h-[min(75vh,640px)]">
      Loading map…
    </div>
  ),
});

export default function Map({ organizations }: { organizations: Organization[] }) {
  return <MapView organizations={organizations} />;
}
