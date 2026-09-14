"use client";

import { useMemo, useState } from "react";
import type { Organization } from "@/data/organizations";
import OrgCard from "./OrgCard";
import TagFilter from "./TagFilter";

export default function GalleryView({
  organizations,
}: {
  organizations: Organization[];
}) {
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!tag) return organizations;
    return organizations.filter((o) => o.tags.includes(tag));
  }, [organizations, tag]);

  return (
    <div className="space-y-5">
      <TagFilter selected={tag} onChange={setTag} />
      <p className="text-sm text-muted">
        Showing {filtered.length} of {organizations.length} places
        {tag ? ` · ${tag}` : ""}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((org) => (
          <OrgCard key={org.id} org={org} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-ring bg-card p-8 text-center text-muted">
          No organizations match this tag yet.
        </p>
      )}
    </div>
  );
}
