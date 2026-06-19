"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Save, Loader2, Trash2 } from "lucide-react";
import { saveCategories, deleteCategories } from "@/lib/admin/actions";

type Props = {
  categories: readonly string[];
};

export default function CategoriesManager({ categories }: Props) {
  const router = useRouter();
  const [items, setItems] = useState<string[]>([...categories]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isBulkPending, startBulkTransition] = useTransition();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Only saved categories (i.e. the ones currently persisted in
  // lib/products.ts) can be bulk-deleted directly — unsaved new rows are
  // just removed with the existing per-row "X" before they're ever saved.
  const savedSet = new Set(categories);

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

  const toggleOne = (category: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const allSavedSelected =
    categories.length > 0 && categories.every((c) => selected.has(c));
  const someSavedSelected = categories.some((c) => selected.has(c));

  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allSavedSelected) {
        categories.forEach((c) => next.delete(c));
      } else {
        categories.forEach((c) => next.add(c));
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

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

  const handleBulkDelete = () => {
    const toDelete = [...selected];
    if (toDelete.length === 0) return;
    const confirmMsg =
      toDelete.length === 1
        ? `Delete category "${toDelete[0]}"? This can't be undone.`
        : `Delete ${toDelete.length} selected categories? This can't be undone.`;
    if (!window.confirm(confirmMsg)) return;

    setError(null);
    setSuccess(false);
    startBulkTransition(async () => {
      try {
        await deleteCategories(toDelete);
        clearSelection();
        setItems((prev) => prev.filter((c) => !toDelete.includes(c)));
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete selected categories.");
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

      {categories.length > 0 && (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={allSavedSelected}
            ref={(el) => {
              if (el) el.indeterminate = !allSavedSelected && someSavedSelected;
            }}
            onChange={toggleAll}
            aria-label="Select all categories"
            className="neu-focus h-4 w-4 accent-[var(--accent-blue)]"
          />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Select all ({categories.length})
          </span>
        </div>
      )}

      {/* bulk action bar — only shown once something is selected */}
      {selected.size > 0 && (
        <div className="neu-inset flex flex-wrap items-center justify-between gap-3 rounded-neu-md p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            {selected.size} selected
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearSelection}
              className="neu-focus font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              disabled={isBulkPending}
              className="neu-pressable neu-focus flex items-center gap-2 rounded-neu-pill px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent-coral disabled:opacity-50"
            >
              {isBulkPending ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Trash2 size={14} />
              )}
              {isBulkPending ? "Deleting..." : `Delete ${selected.size}`}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {items.map((value, i) => {
          const isSaved = savedSet.has(value);
          return (
            <div key={i} className="flex items-center gap-2">
              {isSaved ? (
                <input
                  type="checkbox"
                  checked={selected.has(value)}
                  onChange={() => toggleOne(value)}
                  aria-label={`Select ${value}`}
                  className="neu-focus h-4 w-4 shrink-0 accent-[var(--accent-blue)]"
                />
              ) : (
                <span className="w-4 shrink-0" aria-hidden="true" />
              )}
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
          );
        })}
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
        those products first. Checkboxes select saved categories for the bulk delete button above;
        the row &quot;X&quot; removes any row (saved or new) before you save.
      </p>
    </div>
  );
}
