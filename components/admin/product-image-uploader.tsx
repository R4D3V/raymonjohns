"use client";

import { useRef, useCallback } from "react";
import { ImagePlus, X, AlertCircle } from "lucide-react";

const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB per image
const ACCEPT = "image/jpeg,image/png,image/webp,image/gif";
const SLOTS = [0, 1, 2, 3] as const;

type Props = {
  /** Current base64 data URIs (or null for empty slots), indexed 0-3 */
  images: (string | null)[];
  onChange: (images: (string | null)[]) => void;
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export default function ProductImageUploader({ images, onChange }: Props) {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleFileChange = useCallback(
    async (index: number, file: File | null) => {
      if (!file) return;
      if (file.size > MAX_SIZE_BYTES) {
        alert(`Image ${index + 1} is too large. Maximum size is 2 MB.`);
        return;
      }
      try {
        const base64 = await fileToBase64(file);
        const next = [...images] as (string | null)[];
        next[index] = base64;
        onChange(next);
      } catch {
        alert("Failed to read image. Please try another file.");
      }
    },
    [images, onChange]
  );

  const handleRemove = useCallback(
    (index: number) => {
      const next = [...images] as (string | null)[];
      next[index] = null;
      onChange(next);
      // Reset the file input so the same file can be re-selected
      if (inputRefs[index].current) inputRefs[index].current!.value = "";
    },
    [images, onChange]
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          Slot 1 = primary (shown on product card). Up to 4 images · max 2 MB each
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {SLOTS.map((i) => {
          const src = images[i] ?? null;
          return (
            <div key={i} className="flex flex-col gap-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                {i === 0 ? "Primary" : `Image ${i + 1}`}
              </p>

              {/* Slot */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => inputRefs[i].current?.click()}
                  className={`neu-inset group relative flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-neu-md transition-colors hover:ring-2 hover:ring-accent-blue/40 ${
                    src ? "p-0" : "p-4"
                  }`}
                  aria-label={src ? `Replace image ${i + 1}` : `Upload image ${i + 1}`}
                >
                  {src ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`Product image ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                      {/* hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <ImagePlus size={20} className="text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <ImagePlus
                        size={22}
                        className="text-ink-faint transition-colors group-hover:text-accent-blue"
                      />
                      <span className="text-center font-mono text-[10px] uppercase tracking-wider text-ink-faint transition-colors group-hover:text-accent-blue">
                        Upload
                      </span>
                    </>
                  )}
                </button>

                {/* Remove button */}
                {src && (
                  <button
                    type="button"
                    onClick={() => handleRemove(i)}
                    aria-label={`Remove image ${i + 1}`}
                    className="neu-raised absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-accent-coral"
                  >
                    <X size={11} />
                  </button>
                )}

                {/* Hidden file input */}
                <input
                  ref={inputRefs[i]}
                  type="file"
                  accept={ACCEPT}
                  className="sr-only"
                  tabIndex={-1}
                  onChange={(e) => handleFileChange(i, e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-start gap-2 text-xs text-ink-faint">
        <AlertCircle size={13} className="mt-0.5 shrink-0" />
        <span>
          Images are converted to base64 and stored in the database. Keep each image under 2 MB
          (JPEG/WebP recommended for smaller file sizes).
        </span>
      </div>
    </div>
  );
}
