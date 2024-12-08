'use client';

import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { products } from './data/detail2'; // Assuming this is where `detail2` is located
import { ProductDetail } from './data/detail2';

// ProductCard Component
interface ProductCardProps {
  product: ProductDetail;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
      <div
        key={product.id}
        className="flex flex-col text-sm sm:text-base leading-relaxed max-w-[150px] sm:max-w-[250px] lg:max-w-[300px]"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto object-cover"
        />
        <div className="flex flex-wrap gap-4 sm:gap-10 items-start justify-between mt-3 bg-white">
          <div className="flex flex-col text-xs sm:text-sm pr-1">
            <div className="font-medium text-neutral-700">{product.name}</div>
            <div className="text-neutral-400">{product.description}</div>
          </div>
          <div className="self-start font-medium text-right text-neutral-900">
            {product.price}
          </div>
        </div>
      </div>
    );

}

export default function Sidebar() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="hidden md:block w-1/5 p-4 space-y-8">
  {/* Sidebar Title */}
  <h2 className="text-xl font-medium text-slate-900 mb-4">New(500)</h2>

  {/* Categories Section */}
  <div>
    <ul className="space-y-3">
      {[
        "Women's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyles",
        "Medicines",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
      ].map((item, index) => (
        <li
          key={index}
          className="text-slate-800 font-medium leading-tight hover:underline cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Gender Selection Section */}
  <div className="relative border-t border-b border-slate-400 py-4">
    <h3 className="text-lg font-medium mb-3">Gender</h3>
    <div className="space-y-2">
      {["Men", "Women", "Unisex"].map((gender, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={gender.toLowerCase()}
            className="form-checkbox h-4 w-4 text-slate-800 bg-slate-400 border-gray-400 rounded-sm focus:ring-slate-500"
          />
          <label
            htmlFor={gender.toLowerCase()}
            className="ml-2 text-slate-600 font-medium cursor-pointer"
          >
            {gender}
          </label>
        </div>
      ))}
    </div>
  </div>

  {/* Kids Section */}
  <div className="border-b border-slate-400 py-4">
    <h3 className="text-lg font-medium mb-3">Kids</h3>
    <div className="space-y-2">
      {["Girls", "Boys"].map((kid, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={kid.toLowerCase()}
            className="form-checkbox h-4 w-4 text-slate-600 bg-slate-400 border-gray-400 rounded-sm focus:ring-slate-400"
          />
          <label
            htmlFor={kid.toLowerCase()}
            className="ml-2 text-slate-700 font-medium cursor-pointer"
          >
            {kid}
          </label>
        </div>
      ))}
    </div>
  </div>

  {/* Shop By Price Section */}
  <div className="border-b border-slate-400 py-4">
    <h3 className="text-lg font-medium mb-3">Shop By Price</h3>
    <div className="space-y-2">
      {[
        "Under ₹2500.00",
        "₹2501.00 - ₹5000.00",
      ].map((price, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`price-${index}`}
            className="form-checkbox h-4 w-4 text-slate-800 bg-slate-400 border-gray-400 rounded-sm focus:ring-slate-600"
          />
          <label
            htmlFor={`price-${index}`}
            className="ml-2 text-slate-600 font-medium cursor-pointer"
          >
            {price}
          </label>
        </div>
      ))}
    </div>
  </div>
</aside>


      {/* Products Section */}
      <main className="w-full md:w-3/4 p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
