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
