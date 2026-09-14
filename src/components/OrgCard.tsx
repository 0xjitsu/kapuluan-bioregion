import Link from "next/link";
import type { Organization } from "@/data/organizations";

export default function OrgCard({ org }: { org: Organization }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ring/50 bg-card p-4 shadow-sm transition hover:border-deep-green/30 hover:shadow-md">
      <div className="mb-2 flex flex-wrap gap-1.5">
        {org.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bone-dark px-2 py-0.5 text-[11px] font-medium text-deep-green"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display text-lg font-semibold text-deep-green">
        <Link href={`/org/${org.id}`} className="hover:underline">
          {org.name}
        </Link>
      </h3>
      {org.aka && org.aka.length > 0 && (
        <p className="mt-0.5 text-xs text-umber">also {org.aka.join(" · ")}</p>
      )}
      <p className="mt-1 text-sm text-muted">{org.place}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/90 line-clamp-3">
        {org.blurb}
      </p>
      <Link
        href={`/org/${org.id}`}
        className="mt-4 inline-flex text-sm font-medium text-deep-green underline-offset-2 hover:underline"
      >
        View place →
      </Link>
    </article>
  );
}
