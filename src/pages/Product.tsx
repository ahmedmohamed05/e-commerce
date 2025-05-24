import { NavLink, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the product details using the id
  // For now, we'll just display the product ID
  
  return (
    <div className="container mx-auto p-4">
      <NavLink to="/" className="text-blue-600 hover:underline">
        Back to Home
      </NavLink>
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg mb-4">Product ID: {id}</p>
        <p className="text-gray-600">
          This is where the product details will be displayed.
          You can fetch the product data using the ID from the URL.
        </p>
      </div>
    </div>
  );
}