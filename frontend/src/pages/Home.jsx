import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Rating from "../components/Rating";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to ShopEase</h1>
        <p className="mt-2 text-lg">Clothes · Books · Electronics · More</p>
      </div>

      {/* CATEGORIES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {["Clothing", "Books", "Electronics", "Accessories"].map(c => (
          <div
            key={c}
            className="bg-white p-6 text-center font-semibold shadow hover:shadow-lg cursor-pointer"
          >
            {c}
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
          {products.map(p => (
            <div key={p._id} className="bg-white p-4 rounded shadow">
              <img
                src={p.image}
                alt={p.name}
                className="h-48 mx-auto object-contain"
              />
              <h3 className="font-semibold mt-2">{p.name}</h3>
              <Rating value={p.rating} reviews={p.reviews} />
              <p className="font-bold text-lg mt-1">₹{p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-2 w-full bg-yellow-400 p-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>© 2026 ShopEase</p>
        <p>support@shopease.com</p>
      </div>
    </div>
  );
}
