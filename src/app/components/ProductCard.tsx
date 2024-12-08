'use client';

import Image from 'next/image';
import { ProductDetail } from './data/detail';

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
        <div className="self-start font-medium text-right text-neutral-700">
          {product.price}
        </div>
      </div>
    </div>
  );
}
