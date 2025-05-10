import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product.types";

export const getAllProducts = async (shop: string): Promise<Product[]> => {
  const query = `*[_type == "product" && shop == $shop]`;
  try {
    const products = await client.fetch(query, { shop });
    return products;
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    throw new Error("Failed to fetch products");
  }
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0]`;
  try {
    const product: Product = await client.fetch(query, { id });
    return product || null;
  } catch (error) {
    console.error("Error fetching product by ID from Sanity:", error);
    throw new Error("Failed to fetch product by ID");
  }
};
