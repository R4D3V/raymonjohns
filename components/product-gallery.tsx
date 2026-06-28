"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductThumbnail from "@/components/product-thumbnail";

type Props = {
  images: string[];
  slug: string;
};

export default function ProductGallery({ images, slug }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;
  const slotCount = Math.max(1, images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="neu-raised-lg aspect-square w-full overflow-hidden rounded-neu-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={hasImages ? activeIndex : "fallback"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            {hasImages ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={images[activeIndex]}
                alt={`Product image ${activeIndex + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProductThumbnail
                slug={slug}
                className="h-full w-full rounded-neu-lg"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip — only shown when there are uploaded images */}
      {slotCount > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`neu-pressable overflow-hidden rounded-neu-sm transition-all ${
                i === activeIndex
                  ? "neu-inset ring-2 ring-accent-blue"
                  : "neu-raised-sm opacity-60 hover:opacity-100"
              }`}
              style={{ width: 72, height: 72 }}
              aria-label={`View image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
