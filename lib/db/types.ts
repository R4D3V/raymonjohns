/**
 * Database type definitions — mirrors the Supabase schema in supabase/schema.sql.
 * These are the raw row types as stored in Postgres; the app-layer Product type
 * in lib/products.ts is derived from these via db/queries.ts.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;                // uuid, primary key
          slug: string;              // unique, used in URLs
          name: string;
          category: string;
          price: number;             // integer, in UGX (smallest unit)
          compare_at_price: number | null;
          summary: string;
          description: string[];     // text[]
          specs: Json;               // jsonb: [{label, value}]
          features: string[];        // text[]
          stock: "in-stock" | "low-stock" | "preorder";
          accent: "blue" | "coral" | "green" | "violet";
          badge: string | null;
          created_at: string;        // timestamptz
          updated_at: string;        // timestamptz
          sort_order: number;        // integer, controls default display order
        };
        Insert: Omit<
          Database["public"]["Tables"]["products"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
        Relationships: [];
      };
      categories: {
        Row: {
          id: string;
          name: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["categories"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["categories"]["Insert"]>;
        Relationships: [];
      };
      product_images: {
        Row: {
          id: string;
          product_slug: string;
          position: number;          // 0–3
          data: string;              // base64 data URI
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["product_images"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["product_images"]["Insert"]>;
        Relationships: [];
      };
    };
  };
};

// Convenience aliases
export type ProductRow = Database["public"]["Tables"]["products"]["Row"];
export type CategoryRow = Database["public"]["Tables"]["categories"]["Row"];
export type ProductImageRow = Database["public"]["Tables"]["product_images"]["Row"];
