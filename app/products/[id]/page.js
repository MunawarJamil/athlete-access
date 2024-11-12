import ProductDetails from "../page";
import { product_sec_row, products } from "@/app/data/product-data";
export default async function GetProductData({ params }) {
    const { id } = await params;
    
    const product = products.find((prod) => prod.id === parseInt(id));
    const sec_row = product_sec_row.find((prod) => prod.id === parseInt(id));
  
    const data = product || sec_row;
  
    if (!data) {
      return <div>Product not found</div>;
    }
  
    return <ProductDetails data={data} />;
  }