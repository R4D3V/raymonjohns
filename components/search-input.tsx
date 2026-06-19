"use client";

import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: Props) {
  return (
    <div className={`neu-inset flex items-center gap-3 rounded-neu-pill px-5 py-3.5 ${className}`}>
      <Search size={16} className="shrink-0 text-ink-faint" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="neu-focus shrink-0 text-ink-faint transition-colors hover:text-accent-blue"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
