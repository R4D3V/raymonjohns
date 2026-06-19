"use client";

import { Plus, X } from "lucide-react";

type Spec = { label: string; value: string };

type Props = {
  items: Spec[];
  onChange: (items: Spec[]) => void;
};

export default function SpecsListInput({ items, onChange }: Props) {
  const update = (index: number, field: keyof Spec, value: string) => {
    const next = [...items];
    next[index] = { ...next[index], [field]: value };
    onChange(next);
  };

  const addRow = () => onChange([...items, { label: "", value: "" }]);
  const removeRow = (index: number) => onChange(items.filter((_, i) => i !== index));

  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
        Specs
      </label>
      <div className="mt-2 flex flex-col gap-2">
        {items.map((spec, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={spec.label}
              onChange={(e) => update(i, "label", e.target.value)}
              placeholder="Label (e.g. Battery)"
              className="neu-inset-sm w-2/5 rounded-neu-sm px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <input
              type="text"
              value={spec.value}
              onChange={(e) => update(i, "value", e.target.value)}
              placeholder="Value (e.g. Up to 6 hrs)"
              className="neu-inset-sm w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              aria-label="Remove spec row"
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
        <Plus size={12} /> Add spec
      </button>
    </div>
  );
}
