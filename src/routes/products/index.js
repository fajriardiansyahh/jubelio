import Products from './items';

export default function ProductsHomePage() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <h2>Products</h2>
        <h3>Products Page</h3>
            
        <div>
            <Products></Products>
        </div>
    </main>
  );
}