// import sampleData from "@/db/sample-data"
import { getLatestProducts, getFeaturedProducts } from "@/lib/actions/product.actions"
import ProductList from "@/components/shared/product/product-list"
import ProductCarousel from "@/components/shared/product/product-carousel";

const Homepage = async() => {
 const latestProducts = await getLatestProducts();
 const featuredProducts = await getFeaturedProducts();

  return (
    <>
    {featuredProducts.length > 0 && (
      <ProductCarousel data={featuredProducts} />
    )}
      <ProductList 
      data={latestProducts} 
      title="Newest Arrival"
    
      />
    </>
  )
}

export default Homepage
