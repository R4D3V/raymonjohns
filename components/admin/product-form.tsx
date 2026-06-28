"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Save, Loader2 } from "lucide-react";
import type { Product } from "@/lib/products";
import { saveProduct, saveProductImagesAction, loadProductImages, type ProductFormInput } from "@/lib/admin/actions";
import RepeatingListInput from "@/components/admin/repeating-list-input";
import SpecsListInput from "@/components/admin/specs-list-input";
import ProductImageUploader from "@/components/admin/product-image-uploader";

type Props = {
  product?: Product; // omitted when creating
  categories: readonly string[];
};

const stockOptions: Product["stock"][] = ["in-stock", "low-stock", "preorder"];
const accentOptions: Product["accent"][] = ["blue", "coral", "green", "violet"];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ProductForm({ product, categories }: Props) {
  const router = useRouter();
  const isEditing = Boolean(product);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [slug, setSlug] = useState(product?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [name, setName] = useState(product?.name ?? "");
  const [category, setCategory] = useState(product?.category ?? categories[0] ?? "");
  const [price, setPrice] = useState(product ? String(product.price) : "");
  const [compareAtPrice, setCompareAtPrice] = useState(
    product?.compareAtPrice ? String(product.compareAtPrice) : ""
  );
  const [summary, setSummary] = useState(product?.summary ?? "");
  const [description, setDescription] = useState<string[]>(
    product?.description?.length ? product.description : [""]
  );
  const [specs, setSpecs] = useState(
    product?.specs?.length ? product.specs : [{ label: "", value: "" }]
  );
  const [features, setFeatures] = useState<string[]>(
    product?.features?.length ? product.features : [""]
  );
  const [stock, setStock] = useState<Product["stock"]>(product?.stock ?? "in-stock");
  const [accent, setAccent] = useState<Product["accent"]>(product?.accent ?? "blue");
  const [badge, setBadge] = useState(product?.badge ?? "");

  // Images: array of 4 slots (string = base64 data URI, null = empty)
  const [images, setImages] = useState<(string | null)[]>([null, null, null, null]);

  // Load existing images when editing
  useEffect(() => {
    if (!product?.slug) return;
    loadProductImages(product.slug).then((loaded) => {
      setImages([
        loaded[0] ?? null,
        loaded[1] ?? null,
        loaded[2] ?? null,
        loaded[3] ?? null,
      ]);
    });
  }, [product?.slug]);

  const handleNameChange = (value: string) => {
    setName(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const input: ProductFormInput = {
      originalSlug: product?.slug,
      slug,
      name,
      category,
      price: Number(price),
      compareAtPrice: compareAtPrice ? Number(compareAtPrice) : undefined,
      summary,
      description,
      specs,
      features,
      stock,
      accent,
      badge: badge || undefined,
    };

    startTransition(async () => {
      try {
        const { slug: savedSlug } = await saveProduct(input);
        // Save images using the final (possibly updated) slug
        await saveProductImagesAction(savedSlug, images);
        router.push("/admin/products");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {error && (
        <div className="neu-inset rounded-neu-md p-4 text-sm text-accent-coral">{error}</div>
      )}

      {/* Images */}
      <div className="neu-raised flex flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow">Images</p>
        <ProductImageUploader images={images} onChange={setImages} />
      </div>

      {/* Basics */}
      <div className="neu-raised flex flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow">Basics</p>


        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Name

            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            />
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Slug
            </label>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 font-mono text-sm text-ink focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Category
            </label>
            <select
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Price (UGX)
            </label>
            <input
              type="number"
              required
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            />
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Compare-at price
            </label>
            <input
              type="number"
              min={0}
              value={compareAtPrice}
              onChange={(e) => setCompareAtPrice(e.target.value)}
              placeholder="Optional"
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Summary
          </label>
          <textarea
            required
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="neu-inset-sm mt-2 w-full resize-none rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Stock status
            </label>
            <select
              value={stock}
              onChange={(e) => setStock(e.target.value as Product["stock"])}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            >
              {stockOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Accent
            </label>
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value as Product["accent"])}
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink focus:outline-none"
            >
              {accentOptions.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Badge
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="e.g. Best seller"
              className="neu-inset-sm mt-2 w-full rounded-neu-sm px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="neu-raised flex flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow">Description</p>
        <RepeatingListInput
          label="Paragraphs"
          items={description}
          onChange={setDescription}
          placeholder="A description paragraph..."
        />
      </div>

      <div className="neu-raised flex flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow">Specs &amp; features</p>
        <SpecsListInput items={specs} onChange={setSpecs} />
        <RepeatingListInput
          label="Features"
          items={features}
          onChange={setFeatures}
          placeholder="A feature highlight..."
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="neu-pressable neu-focus flex items-center gap-2 rounded-neu-pill bg-bg px-6 py-3 font-mono text-xs uppercase tracking-wider text-accent-blue disabled:opacity-60"
        >
          {isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {isPending ? "Saving..." : isEditing ? "Save changes" : "Create product"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/products")}
          className="neu-pressable neu-focus rounded-neu-pill px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-muted"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
