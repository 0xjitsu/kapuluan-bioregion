"use client";

import { ALL_TAGS } from "@/data/organizations";

export default function TagFilter({
  selected,
  onChange,
}: {
  selected: string | null;
  onChange: (tag: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`rounded-full px-3 py-1 text-xs font-medium transition ${
          selected === null
            ? "bg-deep-green text-bone"
            : "bg-bone-dark text-deep-green hover:bg-ring/40"
        }`}
      >
        All
      </button>
      {ALL_TAGS.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(selected === tag ? null : tag)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            selected === tag
              ? "bg-umber text-bone"
              : "bg-bone-dark text-deep-green hover:bg-ring/40"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
