import ProductList from "./ProductGrid"; // Assuming this is the correct path

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 49.99,
    imageUrl: '/Images/product1.png',
    heading: 'Heading 1', 
    title: 'Product 1 Title', 
    category: 'Category 1', 
    colorts: ['Red', 'Blue'], 
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    imageUrl: '/Images/product2.png',
    heading: 'Heading 2', 
    title: 'Product 2 Title', 
    category: 'Category 2', 
    colorts: ['Green', 'Black'], 
  },
  {
    id: 3,
    name: 'Product 3',
    price: 76.99,
    imageUrl: '/Images/product3.png',
    heading: 'Heading 3', 
    title: 'Product 3 Title', 
    category: 'Category 3', 
    colorts: ['Yellow', 'White'], 
  },
  // Add more products as needed
];

function ProductSearches() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductSearches;
