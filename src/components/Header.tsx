"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type ViewMode = "map" | "gallery";

export default function Header({
  view,
  onViewChange,
}: {
  view?: ViewMode;
  onViewChange?: (v: ViewMode) => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHome = pathname === "/";
  const currentView =
    view ?? ((searchParams.get("view") === "gallery" ? "gallery" : "map") as ViewMode);

  const navClass = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-sm transition ${
      active
        ? "bg-deep-green text-bone"
        : "text-deep-green hover:bg-bone-dark"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ring/40 bg-bone/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="group min-w-0">
          <span className="font-display text-xl font-semibold tracking-tight text-deep-green sm:text-2xl">
            Kapuluan
          </span>
          <span className="mt-0.5 block truncate text-xs text-muted sm:text-sm">
            Philippine Bioregion Atlas · Living by watershed &amp; sea
          </span>
        </Link>

        <nav className="flex shrink-0 flex-wrap items-center justify-end gap-1">
          {isHome && onViewChange ? (
            <>
              <button
                type="button"
                onClick={() => onViewChange("map")}
                className={navClass(currentView === "map")}
              >
                Map
              </button>
              <button
                type="button"
                onClick={() => onViewChange("gallery")}
                className={navClass(currentView === "gallery")}
              >
                Gallery
              </button>
            </>
          ) : (
            <>
              <Link href="/?view=map" className={navClass(false)}>
                Map
              </Link>
              <Link href="/?view=gallery" className={navClass(false)}>
                Gallery
              </Link>
            </>
          )}
          <Link href="/about" className={navClass(pathname === "/about")}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
