"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Save, Loader2 } from "lucide-react";
import { saveCategories } from "@/lib/admin/actions";

type Props = {
  categories: readonly string[];
};

export default function CategoriesManager({ categories }: Props) {
  const router = useRouter();
  const [items, setItems] = useState<string[]>([...categories]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const update = (index: number, value: string) => {
    const next = [...items];
    next[index] = value;
    setItems(next);
    setSuccess(false);
  };

  const addRow = () => {
    setItems([...items, ""]);
    setSuccess(false);
  };

  const removeRow = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setSuccess(false);
  };

  const handleSave = () => {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      try {
        await saveCategories(items);
        setSuccess(true);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to save categories.");
      }
    });
  };

  return (
    <div className="neu-raised flex flex-col gap-5 p-6 sm:p-8">
      {error && (
        <div className="neu-inset rounded-neu-md p-4 text-sm text-accent-coral">{error}</div>
      )}
      {success && (
        <div className="neu-inset rounded-neu-md p-4 text-sm text-accent-green">
          Categories saved to lib/products.ts.
        </div>
      )}

      <div className="flex flex-col gap-2">
        {items.map((value, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => update(i, e.target.value)}
              className="neu-inset-sm w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeRow(i)}
              aria-label="Remove category"
              className="neu-pressable neu-focus flex h-9 w-9 shrink-0 items-center justify-center rounded-neu-sm text-ink-faint hover:text-accent-coral"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={addRow}
          className="neu-pressable neu-focus flex items-center gap-1.5 rounded-neu-pill px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted hover:text-accent-blue"
        >
          <Plus size={12} /> Add category
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={isPending}
          className="neu-pressable neu-focus flex items-center gap-2 rounded-neu-pill bg-bg px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-accent-blue disabled:opacity-60"
        >
          {isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {isPending ? "Saving..." : "Save categories"}
        </button>
      </div>

      <p className="text-xs leading-relaxed text-ink-faint">
        Removing a category that&apos;s still used by a product will be blocked — reassign or delete
        those products first.
      </p>
    </div>
  );
}
