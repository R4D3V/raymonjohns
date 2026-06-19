"use client";

import { Plus, X } from "lucide-react";

type Props = {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
};

export default function RepeatingListInput({ label, items, onChange, placeholder }: Props) {
  const update = (index: number, value: string) => {
    const next = [...items];
    next[index] = value;
    onChange(next);
  };

  const addRow = () => onChange([...items, ""]);
  const removeRow = (index: number) => onChange(items.filter((_, i) => i !== index));

  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
        {label}
      </label>
      <div className="mt-2 flex flex-col gap-2">
        {items.map((value, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => update(i, e.target.value)}
              placeholder={placeholder}
              className="neu-inset-sm w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              aria-label={`Remove ${label} row`}
              className="neu-pressable neu-focus flex h-9 w-9 shrink-0 items-center justify-center rounded-neu-sm text-ink-faint hover:text-accent-coral"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addRow}
        className="neu-pressable neu-focus mt-2 flex items-center gap-1.5 rounded-neu-pill px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted hover:text-accent-blue"
      >
        <Plus size={12} /> Add {label.toLowerCase().replace(/s$/, "")}
      </button>
    </div>
  );
}
