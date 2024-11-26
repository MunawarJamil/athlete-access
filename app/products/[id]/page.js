import ProductDetails from "../page";
import { product_sec_row, products } from "@/app/data/product-data";

export default async function  GetProductData({ params }) {
  const { id } = await  params;

  // Parse `id` and find the product
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) {
    return <div>Invalid product ID</div>;
  }

  // Find the product in data sources
  const product = products.find((prod) => prod.id === parsedId);
  const sec_row = product_sec_row.find((prod) => prod.id === parsedId);

  // Determine the final data
  const data = product || sec_row;

  if (!data) {
    return <div>Product not found</div>;
  }

  // Pass data to ProductDetails
  return <ProductDetails data={data} />;
}
