import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import { getOrganization, organizations } from "@/data/organizations";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return organizations.map((o) => ({ id: o.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const org = getOrganization(id);
  if (!org) return { title: "Not found" };
  return {
    title: org.name,
    description: org.blurb,
  };
}

export default async function OrgDetailPage({ params }: Props) {
  const { id } = await params;
  const org = getOrganization(id);
  if (!org) notFound();

  return (
    <div className="flex min-h-full flex-col">
      <Suspense fallback={<div className="h-16 border-b border-ring/40 bg-bone" />}>
        <Header />
      </Suspense>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
        <Link
          href="/?view=gallery"
          className="text-sm text-muted hover:text-deep-green"
        >
          ← Gallery
        </Link>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {org.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-bone-dark px-2.5 py-0.5 text-xs font-medium text-deep-green"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold text-deep-green">
          {org.name}
        </h1>
        {org.aka && org.aka.length > 0 && (
          <p className="mt-1 text-sm text-umber">also known as {org.aka.join(" · ")}</p>
        )}
        <p className="mt-2 text-muted">{org.place}</p>
        <p className="mt-1 text-xs text-muted">
          {org.lat.toFixed(3)}, {org.lng.toFixed(3)} · {org.category}
        </p>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-lg font-semibold text-deep-green">
            About
          </h2>
          <p className="leading-relaxed text-ink/90">{org.blurb}</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-lg font-semibold text-deep-green">
            Bioregional context
          </h2>
          <p className="leading-relaxed text-ink/90">{org.bioregionalContext}</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-display text-lg font-semibold text-deep-green">
            Sources
          </h2>
          <ul className="space-y-2">
            {org.sources.map((s) => (
              <li key={s.url + s.title}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-green underline underline-offset-2 hover:text-deep-green-soft"
                >
                  {s.title}
                </a>
                <span className="ml-2 text-xs uppercase tracking-wide text-muted">
                  {s.type}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {org.website && (
          <p className="mt-8">
            <a
              href={org.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-deep-green px-4 py-2 text-sm font-medium text-bone hover:bg-deep-green-soft"
            >
              Visit website
            </a>
          </p>
        )}
      </main>
      <footer className="border-t border-ring/40 px-4 py-4 text-center text-xs text-muted">
        Kapuluan — Philippine Bioregion Atlas · knowledge commons
      </footer>
    </div>
  );
}
