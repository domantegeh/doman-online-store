import { ProductExtend } from "../types/products";
import Fetch from "./fetch";

// export const getProducts = async () => {
//   const response = await fetch("http://localhost:3000/api/products", {
//     next: { tags: ["products"] },
//   });
//   const result = await response.json();
//   console.log(result);
// };

export const getProducts = async () => {
  const response = await Fetch.get<ProductExtend[]>("/api/products", {
    next: {
      tags: ["products"],
      revalidate: 30,
    },
  });
  return response;
};

export const getDetailProducts = async (product_id: string) => {
  const response = await Fetch.get<ProductExtend>(
    `/api/products${product_id}`,
    { next: { tags: [`products-${product_id}`], revalidate: 30 } }
  );
  return response;
};
